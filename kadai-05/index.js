const profile = {
    name: "吉田",
    age: 21,
    hobby: "読書",
    major: "日本史"
}
const dictionary = {
    name: "名前",
    age: "年齢",
    hobby: "趣味",
    major: "専攻"
}

const keys = Object.keys(profile)
for (const key of keys) {
    const value = profile[key]
    const key_in_japanese = dictionary[key]
    console.log(`私の${key_in_japanese}は${value}です。`)
}