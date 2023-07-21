export type AnyComponentNode = ComponentNode | ComponentSetNode;
export type TraversalCallback = (node: AnyComponentNode) => void;

export function forAllSubtreeComponents(nodes: readonly SceneNode[], callback: TraversalCallback) {
    const stack: SceneNode[] = [...nodes];

    while (stack.length > 0) {
        const node = stack.pop();
        if (!node) break;

        if (node.type === "COMPONENT" || node.type === "COMPONENT_SET")
            callback(node);

        if (!("findChildren" in node)) continue;
        node.findChildren(node => node.type !== "INSTANCE")
          .forEach((child) => { stack.push(child); });
    }
}
