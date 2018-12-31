// Type definitions for vue-template-compiler 2.5
// Project: https://github.com/vuejs/vue/tree/dev/packages/vue-template-compiler#readme
// Definitions by: Steven Liekens <https://github.com/StevenLiekens>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.3
/// <reference types="vue" />
export as namespace VueTemplateCompiler;

export function compile(
    template: string,
    options?: CompilerOptions
): CompiledResult;

export function compileToFunctions(
    template: string
): {
    render: (createElement: Vue.CreateElement) => Vue.VNode;
    staticRenderFns: Array<(createElement: Vue.CreateElement) => Vue.VNode>;
};

export function ssrCompile(
    template: string,
    options?: CompilerOptions
): CompiledResult;

export function ssrCompileToFunctions(
    template: string
): {
    render: (createElement: Vue.CreateElement) => Vue.VNode;
    staticRenderFns: Array<(createElement: Vue.CreateElement) => Vue.VNode>;
};

export function parseComponent(
    file: string,
    options?: SFCCompilerOptions
): SFCDescriptor;

export interface CompilerOptions {
    /**
     * allow customizing warning in different environments; e.g. node
     */
    warn?: (msg: string, vm?: Vue.Component) => void;

    /**
     * platform specific modules; e.g. style; class
     */
    modules?: ModuleOptions[];

    /**
     * platform specific directives
     */
    directives?: { [key: string]: Vue.DirectiveFunction };

    /**
     * a list of AST properties to be considered static; for optimization
     */
    staticKeys?: string;

    /**
     * check if a tag is unary for the platform
     */
    isUnaryTag?(tag: string): boolean | null | void;

    /**
     * check if a tag can be left opened
     */
    canBeLeftOpenTag?(tag: string): boolean | null | void;

    /**
     * check if a tag is a native for the platform
     */
    isReservedTag?(tag: string): boolean | null | void;

    /**
     * preserve whitespace between elements?
     */
    preserveWhitespace?: boolean;

    /**
     * optimize static content?
     */
    optimize?: boolean;

    //#region web specific

    /**
     * check if an attribute should be bound as a property
     */
    mustUseProp?(
        tag: string,
        type: string | null | undefined,
        name: string
    ): boolean;

    /**
     * check if a tag needs to preserve whitespac
     */
    isPreTag?(attr: string): boolean | null | void;

    /**
     * check the namespace for a tag
     */
    getTagNamespace?(tag: string): string | null | void;

    /**
     * only false for non-web builds
     */
    expectHTML?: boolean;

    isFromDOM?: boolean;

    shouldDecodeTags?: boolean;

    shouldDecodeNewlines?: boolean;

    shouldDecodeNewlinesForHref?: boolean;

    //#endregion

    //#region runtime user-configurable

    /**
     * template delimiters
     */
    delimiters?: [string, string];

    /**
     * preserve comments in template
     */
    comments?: boolean;

    /**
     * for ssr optimization compiler
     */
    scopeId?: string;

    //#endregion
}

export interface CompiledResult {
    ast?: ASTElement | null;

    render: string;

    staticRenderFns: string[];

    stringRenderFns?: string[];

    errors?: string[];

    tips?: string[];
}

export interface ModuleOptions {
    /**
     * transform an AST node before any attributes are processed
     * returning an ASTElement from pre/transforms replaces the element
     */
    preTransformNode(el: ASTElement): ASTElement | null | void;

    /**
     * transform an AST node after built-ins like v-if, v-for are processed
     */
    transformNode(el: ASTElement): ASTElement | null | void;

    /**
     * transform an AST node after its children have been processed
     * cannot return replacement in postTransform because tree is already finalized
     */
    postTransformNode(el: ASTElement): void;

    /**
     * generate extra data string for an element
     */
    genData(el: ASTElement): string;

    /**
     * further transform generated code for an element
     */
    transformCode?(el: ASTElement, code: string): string;

    /**
     * AST properties to be considered static
     */
    staticKeys?: string[];
}

export interface ASTModifiers {
    [key: string]: boolean;
}

export interface ASTIfCondition {
    exp?: string | null;

    block: ASTElement;
}

export type ASTIfConditions = ASTIfCondition[];

export interface ASTElementHandler {
    value: string;

    params?: any[];

    modifiers?: ASTModifiers | null;
}

export interface ASTElementHandlers {
    [key: string]: ASTElementHandler | ASTElementHandler[];
}

export interface ASTDirective {
    name: string;
    rawName: string;
    value: string;
    arg?: string | null;
    modifiers?: ASTModifiers | null;
}

export type ASTNode = ASTElement | ASTText | ASTExpression;

export interface ASTElement {
    type: 1;

    tag: string;

    attrsList: Array<{ name: string; value: any }>;

    attrsMap: { [key: string]: any };

    parent?: ASTElement;

    children: ASTNode[];

    processed?: true;

    static?: boolean;

    staticRoot?: boolean;

    staticInFor?: boolean;

    staticProcessed?: boolean;

    hasBindings?: boolean;

    text?: string;

    attrs?: Array<{ name: string; value: any }>;

    props?: Array<{ name: string; value: string }>;

    plain?: boolean;

    pre?: true;

    ns?: string;

    component?: string;

    inlineTemplate?: true;

    transitionMode?: string | null;

    slotName?: string | null;

    slotTarget?: string | null;

    slotScope?: string | null;

    scopedSlots?: { [name: string]: ASTElement };

    ref?: string;

    refInFor?: boolean;

    if?: string;

    ifProcessed?: boolean;

    elseif?: string;

    else?: true;

    ifConditions?: ASTIfConditions;

    for?: string;

    forProcessed?: boolean;

    key?: string;

    alias?: string;

    iterator1?: string;

    iterator2?: string;

    staticClass?: string;

    classBinding?: string;

    staticStyle?: string;

    styleBinding?: string;

    events?: ASTElementHandlers;

    nativeEvents?: ASTElementHandlers;

    transition?: string | true;

    transitionOnAppear?: boolean;

    model?: {
        value: string;
        callback: string;
        expression: string;
    };

    directives?: ASTDirective[];

    forbidden?: true;

    once?: true;

    onceProcessed?: boolean;

    wrapData?(code: string): string;

    wrapListeners?(code: string): string;

    /**
     * 2.4 ssr optimization
     */
    ssrOptimizability?: number;

    /**
     * weex specific
     */
    appendAsTree?: boolean;
}

export interface ASTExpression {
    type: 2;

    expression: string;

    text: string;

    tokens: Array<string | object>;

    static?: boolean;

    /**
     * 2.4 ssr optimization
     */
    ssrOptimizability?: number;
}

export interface ASTText {
    type: 3;

    text: string;

    static?: boolean;

    isComment?: boolean;

    /**
     * 2.4 ssr optimization
     */
    ssrOptimizability?: number;
}

export interface SFCCompilerOptions {
    pad?: 'line' | 'space';
}

export interface SFCDescriptor {
    template?: SFCBlock | null;

    script?: SFCBlock | null;

    styles: SFCBlock[];

    customBlocks: SFCBlock[];
}

export interface SFCBlock {
    type: string;

    content: string;

    attrs: { [attribute: string]: string };

    start?: number;

    end?: number;

    lang?: string;

    src?: string;

    scoped?: boolean;

    module?: string | boolean;
}
