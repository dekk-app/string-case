import { isPascal } from "../../src/is/pascal";
import { button } from "../fixtures/button";
import { camel } from "../fixtures/camel";
import { kebab } from "../fixtures/kebab";
import { lower } from "../fixtures/lower";
import { pascal } from "../fixtures/pascal";
import { screamingKebab } from "../fixtures/screaming-kebab";
import { screamingSnake } from "../fixtures/screaming-snake";
import { sentence } from "../fixtures/sentence";
import { snake } from "../fixtures/snake";
import { upper } from "../fixtures/upper";

describe("isPascal", () => {
	const negative = {
		camel,
		kebab,
		screamingKebab,
		screamingSnake,
		snake,
		lower,
		upper,
		sentence,
		button,
	};
	it(`should test pascal as true`, () => {
		pascal.forEach(value => {
			expect(isPascal(value)).toBe(true);
		});
	});
	it(`should test negatives as false`, () => {
		Object.values(negative).forEach(values => {
			values.forEach(value => {
				expect(isPascal(value)).toBe(false);
			});
		});
	});
});
