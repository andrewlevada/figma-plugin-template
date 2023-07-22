import { forAllSubtree } from "./document-crawler";

const selectedNodes: readonly SceneNode[] = figma.currentPage.selection;

forAllSubtree(selectedNodes, (node) => {

});

figma.closePlugin();
