import React, { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import DateTimePicker from "@react-native-community/datetimepicker";
import { format } from "date-fns";
import { Alert } from "react-native";
import { Formik } from "formik";
import * as Yup from "yup";
import { useData } from "../../../hooks/useData";
import { transactionService } from "../../../services/transactionService";
import { PrimaryButton } from "../../../components/common/Button";
import { TextInputField } from "../../../components/common/Input/Text";
import { PickerField } from "../../../components/common/Input/Picker";
import { SelectModal } from "../../../components/common/Modal";
import { ErrorText, FormContainer } from "./styled";

export function Register() {
  const navigation = useNavigation();
  const { accounts, categories } = useData();

  const [date, setDate] = useState(new Date());
  const [showDatePicker, setShowDatePicker] = useState(false);
  const [showCategoryModal, setShowCategoryModal] = useState(false);
  const [showAccountModal, setShowAccountModal] = useState(false);

  const TransactionSchema = Yup.object().shape({
    description: Yup.string().required("Description is required"),
    amount: Yup.number()
      .typeError("Amount must be a number")
      .positive("Amount must be greater than zero")
      .required("Amount is required"),
    category: Yup.string().required("Category is required"),
    account: Yup.string().required("Account is required"),
  });

  return (
    <FormContainer>
      <Formik
        initialValues={{
          description: "",
          amount: "",
          category: "",
          account: "",
        }}
        validationSchema={TransactionSchema}
        onSubmit={async (values, { resetForm }) => {
          try {
            const selectedAccount = accounts.find(
              (a) => a.name === values.account
            );
            const selectedCategory = categories.find(
              (c) => c.name === values.category
            );

            if (!selectedAccount || !selectedCategory) {
              Alert.alert("Error", "Please select valid account and category.");
              return;
            }

            const type = selectedCategory.type;

            const parsedAmount = parseFloat(values.amount);

            const finalAmount =
              type === "expense"
                ? -Math.abs(parsedAmount)
                : Math.abs(parsedAmount);

            await transactionService.create({
              accountId: selectedAccount.id,
              categoryId: selectedCategory.id,
              amount: finalAmount,
              description: values.description,
              date: date.toISOString(),
            });

            Alert.alert("Success", "Transaction saved successfully!");
            resetForm();
            navigation.goBack();
          } catch (error) {
            Alert.alert(
              "Error",
              "Could not save transaction. Try again later."
            );
          }
        }}
      >
        {({
          handleChange,
          handleBlur,
          handleSubmit,
          setFieldValue,
          values,
          errors,
          touched,
        }) => (
          <>
            <TextInputField
              label="Description"
              placeholder="Ex: Grocery shopping"
              onChange={handleChange("description")}
              onBlur={handleBlur("description")}
              value={values.description}
            />
            {touched.description && errors.description && (
              <ErrorText>{errors.description}</ErrorText>
            )}

            <TextInputField
              label="Amount"
              placeholder="Ex: 120.00"
              keyboardType="numeric"
              onChange={handleChange("amount")}
              onBlur={handleBlur("amount")}
              value={values.amount}
            />
            {touched.amount && errors.amount && (
              <ErrorText>{errors.amount}</ErrorText>
            )}

            <PickerField
              label="Category"
              value={values.category}
              onPress={() => setShowCategoryModal(true)}
            />
            {touched.category && errors.category && (
              <ErrorText>{errors.category}</ErrorText>
            )}

            <PickerField
              label="Account"
              value={values.account}
              onPress={() => setShowAccountModal(true)}
            />
            {touched.account && errors.account && (
              <ErrorText>{errors.account}</ErrorText>
            )}

            <PickerField
              label="Date"
              value={format(date, "dd/MM/yyyy")}
              onPress={() => setShowDatePicker(true)}
              icon="calendar-number-outline"
            />

            {showDatePicker && (
              <DateTimePicker
                value={date}
                mode="date"
                display="default"
                onChange={(_, selectedDate) => {
                  setShowDatePicker(false);
                  if (selectedDate) setDate(selectedDate);
                }}
              />
            )}

            <PrimaryButton
              label="Save Transaction"
              onPress={() => handleSubmit()}
            />

            <SelectModal
              visible={showCategoryModal}
              options={categories}
              onPress={(item) => {
                setFieldValue("category", item.name);
                setFieldValue("categoryId", item.id);
                setShowCategoryModal(false);
              }}
              onClose={() => setShowCategoryModal(false)}
            />

            <SelectModal
              visible={showAccountModal}
              options={accounts}
              onPress={(item) => {
                setFieldValue("account", item.name);
                setFieldValue("accountId", item.id);
                setShowAccountModal(false);
              }}
              onClose={() => setShowAccountModal(false)}
            />
          </>
        )}
      </Formik>
    </FormContainer>
  );
}
