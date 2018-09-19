/*题目描述
  查找两个节点的最近的一个共同父节点，可以包括节点自身
  输入描述:
  oNode1 和 oNode2 在同一文档中，且不会为相同的节点*/
function commonParentNode(oNode1, oNode2) {
     if(isChildNode(oNode1,oNode2)){
        return oNode2;
    }
    if(isChildNode(oNode2,oNode1)){
        return oNode1;
    }
    var sameParentNode = oNode1.parentNode;
    while(sameParentNode!=document){
        if(isChildNode(oNode2,sameParentNode)){
            return sameParentNode;
        }
        sameParentNode = sameParentNode.parentNode;
    }
    return document;

}
function isChildNode(cNode,pNode){
    var children = pNode.childNodes;
    for(var i=0;i<children.length;i++){
        if(children[i].childNodes.length>0){
            return isChildNode(cNode,children[i]);
        }
        if(cNode==children[i]){
            return true;
        }
    }
    return false;
}