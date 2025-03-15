function replacewith(field1, field2, field3) {
    let unproper_paragraph = document.getElementById("field1").value;
    let find_word = document.getElementById("field2").value;
    let replace_with = document.getElementById("field3").value;
    let found = Number(0);
    let find_word_lower = find_word.toLowerCase();
    let converted_to_array = unproper_paragraph.split(" ");
    for (let key in converted_to_array) {
        // console.log(key,converted_to_array[key]);
        let last_char_save = converted_to_array[key].substr(-1);
        if (last_char_save == "." || last_char_save == ",") {
            let clean_word = converted_to_array[key].toLowerCase().trim().replace(/[.,]/g, "");
            if (clean_word == find_word_lower) {
                console.log("Position of Word : ", key);
                converted_to_array[key] = replace_with + last_char_save;
                found = Number(1);
            }
        }
        else {
            if (converted_to_array[key].toLowerCase() == find_word_lower) {
                console.log("Position of Word : ", key);
                converted_to_array[key] = replace_with;
                found = Number(1);
            }
        }
    }
    let resultElement = document.getElementById("output");
    if (found == 0) {
        resultElement.innerHTML = "<strong>Word not found........</strong>";
    } else {

        let converted_to_string = converted_to_array.join(" ");
        resultElement.innerHTML = `<strong>Unproper Paragraph :</strong> ${unproper_paragraph}<br>
        <strong>Updated Paragraph :</strong> ${converted_to_string}`;
    }
}
