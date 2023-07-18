import { PreventRemoveProvider } from "@react-navigation/native";
import React from "react";
import { StyleSheet, Text, View } from "react-native"


export enum TitleType {
  H1,
  H2,
  H3,
  H4,
  H5,
}

type TitleProps = {
  TypeTitle: TitleType,
  children: JSX.Element | JSX.Element[] | string
};

type TextProps = {
  children: JSX.Element | JSX.Element[] | string
};



export const Title = (props: TitleProps) => {
  let style: any;

  switch (props.TypeTitle) {
    case TitleType.H1:
      style = styles.h1;
    case TitleType.H2:
      style = styles.h2;
    case TitleType.H3:
      style = styles.h3;
    case TitleType.H4:
      style = styles.h4;
    case TitleType.H5:
      style = styles.h5;
  }


  return (
    <View>
      <Text style={style}>
        {props.children}
      </Text>
    </View>
  );
}

export const TextBox = (props: TextProps) => {
  return (
    <View>
      <Text style={styles.text}>
        {props.children}
      </Text>
    </View >
  );
}


const styles = StyleSheet.create({
  h1: {
    color: "white",
    fontSize: 24,
    textAlign: "center"
  },
  h2: {
    color: "white",
    fontSize: 22,
    textAlign: "center"
  },
  h3: {
    color: "white",
    fontSize: 20,
    textAlign: "center"
  },
  h4: {
    color: "white",
    fontSize: 18,
    textAlign: "center"
  },
  h5: {
    color: "white",
    fontSize: 16,
    textAlign: "center"
  },
  text: {
    color: "white",
    fontSize: 12,
    textAlign: "center"
  }
});
