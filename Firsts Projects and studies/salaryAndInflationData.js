import rl from "readline-sync";

var data = [
{salary: 510, year: 2010, ipca: 5.91},
{salary: 545, year: 2011, ipca: 6.50},
{salary: 622, year: 2012, ipca: 5.84},
{salary: 678, year: 2013, ipca: 5.91},
{salary: 724, year: 2014, ipca: 6.41},
{salary: 788, year: 2015, ipca: 0.67},
{salary: 880, year: 2016, ipca: 6.29},
{salary: 937, year: 2017, ipca: 2.95},
{salary: 954, year: 2018, ipca: 3.75},
{salary: 998, year: 2019, ipca: 4.31},
{salary: 1040, year: 2020, ipca: 4.52}
];



const intro = "=== Seja bem-vinde à aplicação que mostra o histórico de 2010 a 2020 do salário mínimo e da inflação ==="
console.log(intro);

console.log("Escolha uma das alternativas:\n")
console.log("\n1: Histórico do salário mínimo entre 2010 e 2020\n");
console.log("2: Histórico da taxa IPCA (inflação)\n");
console.log("3: Histórico completo + percentual de crescimento\n");

var userChoice = rl.question("Escolha uma opção (apenas números): ");
userChoice = Number(userChoice);

var yearLabel = "Ano:";
var salaryLabel = "Salário:";
var ipcaLabel = "IPCA:";
var salaryGrowthLabel = "Crescimento:";
yearLabel = yearLabel.padEnd(15, " ");
salaryLabel = salaryLabel.padEnd(15, " ");
ipcaLabel = ipcaLabel.padEnd(15, " ");
salaryGrowthLabel = salaryGrowthLabel.padEnd(15, " ");


switch (userChoice) {

    case 1:
        for (var returned in data) {

            var yearData = String(data[returned].year);
            var salaryData = data[returned].salary;

            console.log(`${yearLabel}${yearData}`);
            console.log(`${salaryLabel}R$ ${salaryData.toFixed(2).replace(".", ",")}\n`);
        }
        break;
    case 2:
        for (var returned in data) {

            var yearData = String(data[returned].year);
            var ipcaData = data[returned].ipca;

            console.log(`${yearLabel}${yearData}`);
            console.log(`${ipcaLabel}${ipcaData.toFixed(2).replace(".", ",")} %\n`);
        }
        break;
    case 3:
        for (var i = 0; i < data.length; i++) {

            var yearData = data[i].year;
            yearData = String(yearData);
            var salaryData = data[i].salary.toFixed(2).replace(".", ",");
            var ipcaData = data[i].ipca.toFixed(2).replace(".", ",");
                if (i > 0) {
                    var difference = data[i].salary - data[i - 1].salary;
                    var salaryGrowth = ((difference/data[i].salary) * 100);
                    salaryGrowth = salaryGrowth.toFixed(2).replace(".", ",")+"%";
                } else {
                    salaryGrowth = "-";
            }
            console.log(`${yearLabel}${yearData}`);
            console.log(`${salaryLabel}${salaryData}`);
            console.log(`${ipcaLabel}${ipcaData}%`);
            console.log(`${salaryGrowthLabel}${salaryGrowth}\n`)

        }
        break;
    default:
        console.log("escolha uma opção válida")
        break;
    }