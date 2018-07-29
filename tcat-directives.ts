import "./tcat-global-stubs";
import { convertDirectiveConfigToDirectiveData as convert } from "tcat";
import { IDirective, TcatDirectiveExtras } from "tcat/dist/src/configConverter";
import { parseNgRepeat } from "tcat/dist/src/parser/attributes";

type DirectiveListTuple = [string, IDirective, TcatDirectiveExtras | undefined];

const InterpolatedBinding = '@';
const TwoWayBinding = '=';
const ExpressionBinding = '&';

const directives: DirectiveListTuple[] = [
    ['tgDuty', {
        scope: {
            tgDuty: TwoWayBinding,
            type: InterpolatedBinding
        }
    }, undefined],
    ['tgRepeat', {
        restrict: 'A',
        multiElement: true,
        //transclude: 'element', // doesn't seem to exist?
        priority: 1000,
        //terminal: true, // not required for us
        scope: {
            tgRepeat: ExpressionBinding
        }
    }, {
        attributes: {
            tgRepeat: {
                parser: parseNgRepeat // tgRepeat looks like a custom replacement for ngRepeat. Seems to be the same syntax.
            }
        }
    }]
];

const output = directives.map(([sid, config, extras]) => convert(sid, config, extras));
console.log(output[1].attributes);
export = output;