import { ArcElement, BarElement, CategoryScale, Chart as ChartJS, Legend, LineElement, LinearScale, PointElement, Title, Tooltip } from 'chart.js';
import React from 'react';
import { Bar } from 'react-chartjs-2';
import { useTable } from 'react-table';

ChartJS.register(LineElement, BarElement, PointElement, ArcElement, CategoryScale, LinearScale, Title, Tooltip, Legend);

const data = [
 
    {
        "Overhead": "Sales - Products",
        "Jan": 567035172.9808396,
        "Feb": 709704421.7821583,
        "March": 943775905.6076958,
        "April": 1700146.9885902232,
        "May": 834902424.9488207,
        "June": 832586982.1314108,
        "July": 537888560.5971923,
        "August": 617635903.8054163,
        "September": 766114253.5959474,
        "October": 855211514.2058038,
        "November": 850249970.9165924,
        "December": 947909624.3220406
    },
    {
        "Overhead": "Sales - Services",
        "Jan": 515752387.51213104,
        "Feb": 429052323.4804421,
        "March": 942654273.2901741,
        "April": 200762134.67035854,
        "May": 573720906.4642819,
        "June": 674469218.7193083,
        "July": 716453645.2322466,
        "August": 705537122.9692943,
        "September": 234992718.34521195,
        "October": 298426476.74447066,
        "November": 913695820.1939114,
        "December": 586691153.4634258
      },
      {
        "Overhead": "Sales - Other",
        "Jan": 11244167.557242779,
        "Feb": 445233358.64961666,
        "March": 427498967.076958,
        "April": 39368503.13126505,
        "May": 102869190.72857492,
        "June": 733111419.096846,
        "July": 790125110.686183,
        "August": 628138966.1296043,
        "September": 30056894.875963412,
        "October": 134691696.9677342,
        "November": 428375223.87598395,
        "December": 74872510.17183939
      },
      {
        "Overhead": "Sales - Deductions",
        "Jan": 485206666.08333206,
        "Feb": 446619667.9204724,
        "March": 69923483.14235352,
        "April": 403223024.84435433,
        "May": 239333713.15693775,
        "June": 82848504.56295246,
        "July": 634956396.6789944,
        "August": 871771647.2097373,
        "September": 970266458.920888,
        "October": 267023493.87408552,
        "November": 400788678.54655045,
        "December": 146933217.67951506
      },
      {
        "Overhead": "Sales - Deductions",
        "Jan": 765081518.0683746,
        "Feb": 46199436.859919116,
        "March": 607575331.6983203,
        "April": 204524267.52841967,
        "May": 11839388.43106036,
        "June": 571657265.319659,
        "July": 346433619.8251695,
        "August": 234480351.92853445,
        "September": 137466609.86726433,
        "October": 155509678.23532113,
        "November": 15354600.488701075,
        "December": 229676817.5227345
      },
      {
        "Overhead": "Sales - Deductions",
        "Jan": 326475378.9630185,
        "Feb": 489072369.70709556,
        "March": 867343719.3686707,
        "April": 802729101.0842851,
        "May": 814879904.8260409,
        "June": 972028948.0037649,
        "July": 622027377.2647927,
        "August": 311937275.78315055,
        "September": 378645532.5423738,
        "October": 244351069.28928086,
        "November": 716127626.3027226,
        "December": 761129371.7010673
      },
      {
        "Overhead": "Total Income",
        "Jan": 936593094.6051106,
        "Feb": 445690364.15113604,
        "March": 566366609.9454875,
        "April": 545155832.7422919,
        "May": 721929093.0002626,
        "June": 848609415.8806365,
        "July": 989010663.7661787,
        "August": 241023128.00921243,
        "September": 944841849.1812462,
        "October": 562489270.7018974,
        "November": 958337739.6084737,
        "December": 592349912.4125767
      },
      {
        "Overhead": "COGS - Labour",
        "Jan": 132399924.02336487,
        "Feb": 458922161.19426346,
        "March": 335075326.0179907,
        "April": 225394481.82437527,
        "May": 560224968.0816487,
        "June": 244347607.624133,
        "July": 744689944.3271205,
        "August": 580837930.7712618,
        "September": 7871348.739916017,
        "October": 247919324.1420471,
        "November": 373294963.0285755,
        "December": 217766091.69010895
      },
      {
        "Overhead": "COGS - Raw Material",
        "Jan": 588536801.3768619,
        "Feb": 311369486.4775666,
        "March": 429998503.23873425,
        "April": 610765393.6396236,
        "May": 296240924.6574175,
        "June": 590107870.4865721,
        "July": 873754711.5547166,
        "August": 221234351.45733216,
        "September": 287643164.41375136,
        "October": 219951221.83941606,
        "November": 892368389.7995952,
        "December": 863598706.9373208
      },
      {
        "Overhead": "COGS - Freight",
        "Jan": 816686748.3492924,
        "Feb": 771042479.0697472,
        "March": 729610538.4168249,
        "April": 7461712.925589503,
        "May": 196866589.55600688,
        "June": 186426865.5382061,
        "July": 202761536.52506846,
        "August": 110171340.88300452,
        "September": 570743428.8549161,
        "October": 604181975.658926,
        "November": 255488693.97379005,
        "December": 40743598.11051875
      },
      {
        "Overhead": "COGS - Overheads",
        "Jan": 59936014.259128086,
        "Feb": 397275553.85612047,
        "March": 810035771.9140238,
        "April": 386812807.78438365,
        "May": 625647127.3398395,
        "June": 811299856.3191109,
        "July": 81501494.29273179,
        "August": 707679650.653618,
        "September": 744117672.555367,
        "October": 73334680.52647562,
        "November": 65614826.55674489,
        "December": 991694956.2719547
      },
      {
        "Overhead": "COGS - Other",
        "Jan": 768714961.5603263,
        "Feb": 191132395.7156975,
        "March": 668529344.1648098,
        "April": 185320295.29459816,
        "May": 493104258.7537013,
        "June": 702825521.2589918,
        "July": 101580027.06486602,
        "August": 537200896.281259,
        "September": 773047453.6507803,
        "October": 827421215.4886398,
        "November": 41654656.51784084,
        "December": 482694139.6992658
      },
      {
        "Overhead": "Total Cost of Goods Sold",
        "Jan": 980854083.4341643,
        "Feb": 889844371.1080539,
        "March": 202089400.17624667,
        "April": 821274819.2640328,
        "May": 306490152.7187297,
        "June": 295641706.9100852,
        "July": 621523562.9620984,
        "August": 229505336.4893207,
        "September": 230946999.69951814,
        "October": 487829975.3561056,
        "November": 678696976.328971,
        "December": 908922226.0457764
      },
      {
        "Overhead": "Gross Profit",
        "Jan": 883398657.1363273,
        "Feb": 715808662.6717861,
        "March": 832279065.4201803,
        "April": 418547720.7090114,
        "May": 753549490.8774593,
        "June": 548428705.719641,
        "July": 170891543.53732118,
        "August": 554187240.2135297,
        "September": 654451368.6267676,
        "October": 312127667.3558128,
        "November": 544702066.6933774,
        "December": 400627406.1717556
      },
      {
        "Overhead": "R&D - Research",
        "Jan": 601704170.4173634,
        "Feb": 833509080.2040077,
        "March": 506507183.2454947,
        "April": 165938864.78384867,
        "May": 331360496.1130622,
        "June": 509726001.0168988,
        "July": 217243728.78377983,
        "August": 737515212.5795864,
        "September": 863964130.7585272,
        "October": 180992948.25803557,
        "November": 30058982.408460166,
        "December": 606916750.8094486
      },
      {
        "Overhead": "R&D - Development",
        "Jan": 854179918.6666102,
        "Feb": 820724964.4597207,
        "March": 204740290.9594175,
        "April": 766393670.6662471,
        "May": 75690210.40846169,
        "June": 442730703.7175793,
        "July": 783919505.3231314,
        "August": 309287048.79392487,
        "September": 27977890.047680363,
        "October": 182263496.63003027,
        "November": 412967576.5042169,
        "December": 543250280.2979722
      },
      {
        "Overhead": "Payroll",
        "Jan": 573381416.8328193,
        "Feb": 159638400.37351352,
        "March": 114249155.32556856,
        "April": 506349368.9352321,
        "May": 769675656.9530748,
        "June": 987969621.3433952,
        "July": 645201716.0782442,
        "August": 585356285.0703111,
        "September": 217590057.5174211,
        "October": 821284724.7213463,
        "November": 196726751.35089335,
        "December": 767066760.953867
      },
      {
        "Overhead": "Salaries",
        "Jan": 569952752.5853444,
        "Feb": 325764888.9807374,
        "March": 899760441.7786051,
        "April": 157354068.85215342,
        "May": 692446809.7967469,
        "June": 783240064.7135268,
        "July": 652072897.4557917,
        "August": 578854370.421343,
        "September": 890984813.8425152,
        "October": 123498247.59318006,
        "November": 629043173.508486,
        "December": 644962192.4805063
      },
      {
        "Overhead": "Wages",
        "Jan": 626464630.5807699,
        "Feb": 700405525.4283148,
        "March": 672911988.6199913,
        "April": 49658371.51502972,
        "May": 876484128.944612,
        "June": 161641414.5520213,
        "July": 59202018.79517173,
        "August": 338404143.333654,
        "September": 633482514.0710856,
        "October": 775944135.2376642,
        "November": 465995872.27440166,
        "December": 229708645.48335078
      },
      {
        "Overhead": "Bonus",
        "Jan": 214274673.34280515,
        "Feb": 475071956.76522696,
        "March": 927469502.6184464,
        "April": 101356.28933927165,
        "May": 486467114.44186616,
        "June": 58174693.74322826,
        "July": 45562971.10728102,
        "August": 534068121.08424515,
        "September": 271434272.3795496,
        "October": 382948503.4498187,
        "November": 472399368.75573593,
        "December": 602011312.9062098
      },
      {
        "Overhead": "Payroll Taxes",
        "Jan": 464935026.48138976,
        "Feb": 988197493.1844887,
        "March": 842463224.3311981,
        "April": 730092894.9933838,
        "May": 750743867.5595944,
        "June": 44350254.44067264,
        "July": 740118480.2014719,
        "August": 152770511.37212628,
        "September": 864308804.2277864,
        "October": 160063054.2758058,
        "November": 384789119.20166314,
        "December": 281347762.9389112
      },
];

const months = ['Jan', 'Feb', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

const prepareBarData = (month) => {
    return {
        labels: data.map(item => item.Overhead),
        datasets: [{
            label: month,
            data: data.map(item => item[month]),
            backgroundColor: 'rgba(75, 192, 192, 0.6)',
        }]
    };
};

const Table = () => {
    const columns = React.useMemo(() => [
        {
            Header: 'Overhead',
            accessor: 'Overhead',
        },
        ...months.map(month => ({
            Header: month,
            accessor: month,
        })),
    ], []);

    const tableData = React.useMemo(() => data, []);

    const {
        getTableProps,
        getTableBodyProps,
        headerGroups,
        rows,
        prepareRow,
    } = useTable({ columns, data: tableData });

    return (
        <table {...getTableProps()} style={{ border: 'solid 1px blue', margin: '20px 0' }}>
            <thead>
                {headerGroups.map(headerGroup => (
                    <tr {...headerGroup.getHeaderGroupProps()}>
                        {headerGroup.headers.map(column => (
                            <th {...column.getHeaderProps()} style={{ borderBottom: 'solid 3px red', background: 'aliceblue', color: 'black', fontWeight: 'bold', padding: '10px' }}>
                                {column.render('Header')}
                            </th>
                        ))}
                    </tr>
                ))}
            </thead>
            <tbody {...getTableBodyProps()}>
                {rows.map(row => {
                    prepareRow(row);
                    return (
                        <tr {...row.getRowProps()}>
                            {row.cells.map(cell => (
                                <td {...cell.getCellProps()} style={{ padding: '10px', border: 'solid 1px gray' }}>
                                    {cell.render('Cell')}
                                </td>
                            ))}
                        </tr>
                    );
                })}
            </tbody>
        </table>
    );
};

const Graphs = () => {
    return (
        <div>
            <Bar data={prepareBarData('Jan')} />
            <Table />
        </div>
    );
};

export default Graphs;