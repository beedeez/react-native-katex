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
    style: StyleProp<ViewStyle>;
    onLoad?: WebViewProps["onLoad"];
    onError?: WebViewProps["onError"];
    webviewProps?: WebViewProps;
}
declare function Katex({ style, onLoad, onError, webviewProps, ...options }: KatexProps): React.JSX.Element;
declare namespace Katex {
    var defaultProps: {
        expression: string;
        displayMode: boolean;
        throwOnError: boolean;
        errorColor: string;
        inlineStyle: string;
        style: {
            root: {
                height: number;
            };
        };
        macros: {};
        colorIsTextColor: boolean;
    };
}
export default Katex;
export { KatexOptions, TrustContext };
