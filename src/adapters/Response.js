// @flow

import { Record, List } from "immutable";
import type { RecordFactory, RecordOf, List as TList } from "immutable";

export type ResponseProp<I: Object> = {|
  count: number,
  items: TList<I>
|};

export type ResponseRecord<I: Object> = RecordOf<ResponseProp<I>>;

const defaultValues: ResponseProp<{}> = {
  count: 0,
  items: List()
};

export function makeResponseRecord<I>(
  res: ResponseProp<I>,
  itemFactory: any
): RecordOf<ResponseProp<I>> {
  const { count, items } = res;
  const factory: RecordFactory<ResponseProp<I>> = Record(defaultValues);
  return factory({ count, items: List(items.map(itemFactory)) });
}
