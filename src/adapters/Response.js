// @flow

import { Record } from "immutable";
import type { RecordFactory, RecordOf } from "immutable";

export type ResponseProp<I: Object> = {|
  count: number,
  items: Array<I>
|};

export type ResponseRecord<I: Object> = RecordOf<ResponseProp<I>>;

const defaultValues: ResponseProp<{}> = {
  count: 0,
  items: []
};

export function makeResponseRecord<I>(
  res: ResponseProp<I>,
  itemFactory: any
): RecordOf<ResponseProp<I>> {
  const { count, items } = res;
  const factory: RecordFactory<ResponseProp<I>> = Record(defaultValues);
  return factory({ count, items: items.map(itemFactory) });
}
