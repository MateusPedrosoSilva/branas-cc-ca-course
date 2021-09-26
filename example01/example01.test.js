const example1 = require("./example01_after");

test("Deve calcular uma corrida de taxi em dias normais", function () {
    // given
    const distance = 1000;
    const date = new Date("2021-07-10T10:00:00");
    // when
    const price = example1.calculateRide(distance, date);
    // then
    expect(price).toBe(2100);

});

test("Deve calcular uma corrida de taxi de noite", function () {
    const distance = 1000;
    const date = new Date("2021-07-10T23:00:00");
    const price = example1.calculateRide(distance, date);
    expect(price).toBe(3900);
});

test("Deve calcular uma corrida de taxi no domingo", function () {
    const distance = 1000;
    const date = new Date("2021-07-11T10:00:00");
    const price = example1.calculateRide(distance, date);
    expect(price).toBe(2900);
});

test("Deve ser de noite", function () {
    const isOvernight = example1.isOvernight(new Date("2021-07-10T23:00:00"));
    expect(isOvernight).toBeTruthy();
});

test("Deve ser domingo", function () {
    const isSunday = example1.isSunday(new Date("2021-07-11T10:00:00"));
    expect(isSunday).toBeTruthy();
});