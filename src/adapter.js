import { Record } from "immutable";

const initValues = {
  ltext: "",
  created: "",
  sourceID: "",
  linkid: "",
  notes: "",
  tags: [],
  reason: "",
  versionID: "",
  details: "",
  finInfo: null,
  viewinfo: { rotations: [], pages: 1 },
  documentID: "e045c52589c3bd51dc2844b6940aea05.pdf"
};

export default new Record(initValues);
