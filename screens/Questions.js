import {
  FlatList,
  StyleSheet,
  Text,
  View,
  TouchableHighlight,
} from "react-native";
import React, { useRef, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import allQuestions from "../src/Constants";
import Question from "../src/Question";
const Pagination = ({ index }) => {
  return (
    <View>
      {[...Array(allQuestions.length).keys()].map((_, i) =>
        i === index ? <View key={i} /> : <View key={i} />
      )}
    </View>
  );
  I;
};

const Questions = ({ navigation }) => {
  const [questionListindex, setquestionListindex] = useState(0);
  const data = allQuestions;
  const Data = useRef();
  const onViewRef = useRef(({ changed }) =>
    setquestionListindex(changed[0].index)
  );
  const viewconfigRef = useRef({ viewAreaCoveragePercentThreshold: 50 });
  const pageScroll = () => {
    questionListindex < data.length - 1
      ? (Data.current.scrollToIndex({
          index:
            questionListindex < data.length - 1
              ? questionListindex + 1
              : questionListindex,
        }),
        console.log(questionListindex))
      : (navigation.navigate("Score"), setquestionListindex(0));
  };
  const abcd = () => {
    pageScroll();
  };
  // console.log(data);
  return (
    <View style={{ alignItems: "center", flex: 1 }}>
      <View style={{ flexDirection: "row", margin: 10 }}>
        <Text style={{ fontSize: 20 }}>Question : </Text>
        <Text style={{ fontSize: 20 }}>{questionListindex + 1}</Text>
        <Text style={{ fontSize: 20 }}>/ {data.length}</Text>
      </View>

      <View style={{ width: "97%" }}>
        <FlatList
          data={data}
          ref={Data}
          horizontal
          showsHorizontalScrollIndicator={false}
          pagingEnabled={true}
          overScrollMode={"never"}
          viewabilityConfig={viewconfigRef.current}
          onViewableItemsChanged={onViewRef.current}
          scrollEnabled={false}
          renderItem={(items) => (
            <Question questionIndex={abcd} question={items} />
          )}
        />
        <Pagination index={questionListindex} />
        {questionListindex === 5 ? (
          <View
            style={{
              width: "100%",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <View style={{ height: 100 }}></View>
          </View>
        ) : (
          <View
            style={{
              alignItems: "center",
              borderRadius: 20,
              backgroundColor: "#f01313",
              height: 50,
              width: 50,
              justifyContent: "center",
              right: 0,
              position: "absolute",
              bottom: -40,
            }}
          >
            <TouchableHighlight
              underlayColor={"green"}
              style={{
                height: "100%",
                width: "100%",
                justifyContent: "center",
                alignItems: "center",
                borderRadius: 20,
              }}
              onPress={() => pageScroll()}
            >
              <Text style={{ color: "white", fontSize: 20 }}>Next</Text>
            </TouchableHighlight>
          </View>
        )}
      </View>
    </View>
  );
};

export default Questions;

const styles = StyleSheet.create({});
