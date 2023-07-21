import { forAllSubtreeComponents } from "./document-crawler";

const selectedNodes: readonly SceneNode[] = figma.currentPage.selection;

forAllSubtreeComponents(selectedNodes, (node) => {
  
});

figma.closePlugin();
