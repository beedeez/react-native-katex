import React from "react";
import { StyleProp, ViewStyle } from "react-native";
import { WebViewProps } from "react-native-webview";
import type { KatexOptions, TrustContext } from "katex";
export interface ContentOptions extends KatexOptions {
    inlineStyle?: string;
    expression?: string;
}
export declare function getKatexContent({ inlineStyle, expression, ...options }: ContentOptions): string;
export interface KatexProps extends ContentOptions {
    style?: StyleProp<ViewStyle>;
    onLoad?: WebViewProps["onLoad"];
    onError?: WebViewProps["onError"];
    webviewProps?: WebViewProps;
}
export default function Katex({ style, onLoad, onError, webviewProps, expression, displayMode, throwOnError, errorColor, inlineStyle, macros, colorIsTextColor, ...options }: KatexProps): React.JSX.Element;
export { KatexOptions, TrustContext };
