export type TraversalCallback = (node: SceneNode) => void;

export function forAllSubtree(nodes: readonly SceneNode[], callback: TraversalCallback) {
    const stack: SceneNode[] = [...nodes];

    while (stack.length > 0) {
        const node = stack.pop();
        if (!node) break;

        // Place condition here to filter nodes
        callback(node);

        // Consider skipping nodes with type = INSTANCE here
        if (!("findChildren" in node)) continue;
        node.findChildren().forEach((child) => { stack.push(child); });
    }
}
