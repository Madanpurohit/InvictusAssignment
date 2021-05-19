import "./App.js";

const Fetch = () => {
    fetch("https://raw.githubusercontent.com/invictustech/test/main/README.md")
        .then(function(response) {
            if (response.status !== 200) {
                console.log('Problem in fetching');
                return;
            }
            response.text().then(function(data) {
                let storeVal = new Map();
                let N = document.getElementById('inp').value;
                let str = "";
                for (let i of data) {
                    if (i === ' ') {
                        // console.log(str);
                        if (!storeVal.has(str)) {
                            storeVal.set(str, 1);
                        } else {
                            storeVal.set(str, storeVal.get(str) + 1);
                        }
                        str = "";
                    } else {
                        str += i;
                    }
                }
                const mapSort1 = new Map([...storeVal.entries()].sort((a, b) => b[1] - a[1]));

                let TableOfResult = "<table className='tableResult'><thead><tr><th>S.No</th><th>WORD</th><th>FREQUENCY</th></tr></thead><tbody>"
                let counter = 1;
                for (let [key, value] of mapSort1.entries()) {
                    if (counter > N) {
                        break;
                    }
                    TableOfResult += "<tr><td>" + (counter) + "</td><td>" + key + "</td><td>" + value + "</td></tr>";
                    counter += 1;
                    // console.log(key, value);
                }
                TableOfResult += "</tbody></table>";
                document.getElementById("result").innerHTML = TableOfResult;


            });
        })
}
export default Fetch;