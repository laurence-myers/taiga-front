import { Iterable } from "immutable";

interface ImmutableIterableIndexed<V> extends Iterable.Indexed<V> {
    // HACK to work around https://github.com/facebook/immutable-js/issues/1183
    [Symbol.iterator](): Iterator<V>;
}

interface Duty {
    is_blocked: boolean;
}

interface IWorkingOnController {
    assignedTo?: ImmutableIterableIndexed<Duty>;
    watching?: ImmutableIterableIndexed<Duty>;
}

interface TemplateScope {
    vm: IWorkingOnController;
}