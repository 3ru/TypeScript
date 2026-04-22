//// [tests/cases/conformance/es2023/intlPluralRulesOptionsES2023.ts] ////

//// [intlPluralRulesOptionsES2023.ts]
new Intl.PluralRules("en-GB", {
    roundingPriority: "lessPrecision",
    roundingIncrement: 100,
    roundingMode: "trunc",
    trailingZeroDisplay: "stripIfInteger",
});

const {
    roundingPriority,
    roundingIncrement,
    roundingMode,
    trailingZeroDisplay,
} = new Intl.PluralRules("en-GB").resolvedOptions();

const rp: "auto" | "morePrecision" | "lessPrecision" = roundingPriority;
const ri: 1 | 2 | 5 | 10 | 20 | 25 | 50 | 100 | 200 | 250 | 500 | 1000 | 2000 | 2500 | 5000 = roundingIncrement;
const rm:
    | "ceil"
    | "floor"
    | "expand"
    | "trunc"
    | "halfCeil"
    | "halfFloor"
    | "halfExpand"
    | "halfTrunc"
    | "halfEven" = roundingMode;
const tzd: "auto" | "stripIfInteger" = trailingZeroDisplay;


//// [intlPluralRulesOptionsES2023.js]
"use strict";
new Intl.PluralRules("en-GB", {
    roundingPriority: "lessPrecision",
    roundingIncrement: 100,
    roundingMode: "trunc",
    trailingZeroDisplay: "stripIfInteger",
});
const { roundingPriority, roundingIncrement, roundingMode, trailingZeroDisplay, } = new Intl.PluralRules("en-GB").resolvedOptions();
const rp = roundingPriority;
const ri = roundingIncrement;
const rm = roundingMode;
const tzd = trailingZeroDisplay;
