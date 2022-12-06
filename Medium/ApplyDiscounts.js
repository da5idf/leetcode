var discountPrices = function (sentence, discount) {
    discount = (100 - discount) / 100;
    const applyDiscount = (el) => {
        if (el[0] !== "$" || el.length === 1) return el;

        const digits = "0123456789"
        for (let i = 1; i < el.length; i++) {
            if (!digits.includes(el[i])) return el;
        }

        return `$${(Number(el.slice(1)) * discount).toFixed(2)}`;
    }

    return sentence.split(" ")
        .map(applyDiscount)
        .join(" ");
};