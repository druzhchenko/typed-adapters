// @flow
import { Record } from "immutable";
import type { RecordFactory, RecordOf } from "immutable";

import makeViewInfoRecord from "./ViewInfo";
import type { ViewInfoRecord } from "./ViewInfo";

export type DocProps = {|
  ltext: string,
  created: string,
  sourceID: string,
  linkid: string,
  notes: string,
  tags: string[],
  reason: string,
  versionID: string,
  details: string,
  finInfo: string | null,
  viewinfo: ViewInfoRecord,
  documentID: string
|};
export type DocRecord = RecordOf<DocProps>;

const viewInfo: ViewInfoRecord = makeViewInfoRecord();

const defaultValues: DocProps = {
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
  viewinfo: viewInfo,
  documentID: "e045c52589c3bd51dc2844b6940aea05.pdf"
};

const DocFactory: RecordFactory<DocProps> = Record(defaultValues);

export default function makeDocRecord(doc: DocProps) {
  return DocFactory({ ...doc, viewinfo: makeViewInfoRecord(doc.viewinfo) });
}
