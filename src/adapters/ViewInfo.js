// @flow
import { Record } from "immutable";
import type { RecordFactory, RecordOf } from "immutable";

export type ViewInfoProps = { pages: number, rotations: number[] };
export type ViewInfoRecord = RecordOf<ViewInfoProps>;

export const defaultValues: ViewInfoProps = {
  pages: 1,
  rotations: []
};

const makeViewInfoRecord: RecordFactory<ViewInfoProps> = Record(defaultValues);

export default makeViewInfoRecord;
