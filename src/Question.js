import {
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Answer } from "./action";
import { WrongAnswer } from "./action";

const Question = ({ question, questionIndex }) => {
  const dispatch = useDispatch();
  const getAnswer =  (option) => {
    option == question.item.correctOption
      ? dispatch(Answer())
      : dispatch(WrongAnswer());
    setTimeout(() => {
      questionIndex();
    }, 1000);
  };

  return (
    <View style={{ width: 350 }}>
      <StatusBar backgroundColor={"blue"} />
      <Text style={{ fontSize: 30, backgroundColor: "#dba0a0" }}>
        {question.item.question}
      </Text>
      {question.item.options.map((option, index) => {
        return (
          <TouchableOpacity
            style={{
              backgroundColor: "#cce3db",
              margin: 10,
              borderRadius: 10,
              padding: 5,
              elevation: 10,
            }}
            onPress={() => getAnswer(option)}
          >
            <Text style={{ fontSize: 20 }}>{option}</Text>
            <Text></Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
};

export default Question;

const styles = StyleSheet.create({});
