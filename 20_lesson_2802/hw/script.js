/* Ваша задача:
Необходимо вывести на страницу карточки, в которых будет написано:

1. Имя президента США и его Партия.
2. Год правления.
3. Процент, на который увеличился государственный долг США при этом президенте. (Учтите, что 0.8 - это 80 процентов), то есть вы должны перевести эти числа из десятичных в целые.

Рамка вокруг каждой карточки должна быть окрашена в соответствии с цветом партии президента. Цвета уже указаны в CSS. Вам нужно написать функцию и дописать стилизацию.

*/

let USA_debt = [
    {
        "year": 1949,
        "president": "Harry S. Truman",
        "party": "Democratic",
        "annual_debt_increase_pct": 0.2
    },
    {
        "year": 1950,
        "president": "Harry S. Truman",
        "party": "Democratic",
        "annual_debt_increase_pct": 1.8
    },
    {
        "year": 1951,
        "president": "Harry S. Truman",
        "party": "Democratic",
        "annual_debt_increase_pct": -0.8
    },
    {
        "year": 1952,
        "president": "Harry S. Truman",
        "party": "Democratic",
        "annual_debt_increase_pct": 1.5
    },
    {
        "year": 1953,
        "president": "Dwight D. Eisenhower",
        "party": "Republican",
        "annual_debt_increase_pct": 2.7
    },
    {
        "year": 1954,
        "president": "Dwight D. Eisenhower",
        "party": "Republican",
        "annual_debt_increase_pct": 2.0
    },
    {
        "year": 1955,
        "president": "Dwight D. Eisenhower",
        "party": "Republican",
        "annual_debt_increase_pct": 1.1
    },
    {
        "year": 1956,
        "president": "Dwight D. Eisenhower",
        "party": "Republican",
        "annual_debt_increase_pct": -0.6
    },
    {
        "year": 1957,
        "president": "Dwight D. Eisenhower",
        "party": "Republican",
        "annual_debt_increase_pct": -0.8
    },
    {
        "year": 1958,
        "president": "Dwight D. Eisenhower",
        "party": "Republican",
        "annual_debt_increase_pct": 2.1
    },
    {
        "year": 1959,
        "president": "Dwight D. Eisenhower",
        "party": "Republican",
        "annual_debt_increase_pct": 3.0
    },
    {
        "year": 1960,
        "president": "Dwight D. Eisenhower",
        "party": "Republican",
        "annual_debt_increase_pct": 0.6
    },
    {
        "year": 1961,
        "president": "John F. Kennedy",
        "party": "Democratic",
        "annual_debt_increase_pct": 0.9
    },
    {
        "year": 1962,
        "president": "John F. Kennedy",
        "party": "Democratic",
        "annual_debt_increase_pct": 3.2
    },
    {
        "year": 1963,
        "president": "John F. Kennedy",
        "party": "Democratic",
        "annual_debt_increase_pct": 2.6
    },
    {
        "year": 1964,
        "president": "Lyndon B. Johnson",
        "party": "Democratic",
        "annual_debt_increase_pct": 1.9
    },
    {
        "year": 1965,
        "president": "Lyndon B. Johnson",
        "party": "Democratic",
        "annual_debt_increase_pct": 1.8
    },
    {
        "year": 1966,
        "president": "Lyndon B. Johnson",
        "party": "Democratic",
        "annual_debt_increase_pct": 0.8
    },
    {
        "year": 1967,
        "president": "Lyndon B. Johnson",
        "party": "Democratic",
        "annual_debt_increase_pct": 2.0
    },
    {
        "year": 1968,
        "president": "Lyndon B. Johnson",
        "party": "Democratic",
        "annual_debt_increase_pct": 6.5
    },
    {
        "year": 1969,
        "president": "Richard Nixon",
        "party": "Republican",
        "annual_debt_increase_pct": 1.8
    },
    {
        "year": 1970,
        "president": "Richard Nixon",
        "party": "Republican",
        "annual_debt_increase_pct": 4.9
    },
    {
        "year": 1971,
        "president": "Richard Nixon",
        "party": "Republican",
        "annual_debt_increase_pct": 7.3
    },
    {
        "year": 1972,
        "president": "Richard Nixon",
        "party": "Republican",
        "annual_debt_increase_pct": 7.3
    },
    {
        "year": 1973,
        "president": "Richard Nixon",
        "party": "Republican",
        "annual_debt_increase_pct": 7.2
    },
    {
        "year": 1974,
        "president": "Gerald Ford",
        "party": "Republican",
        "annual_debt_increase_pct": 3.7
    },
    {
        "year": 1975,
        "president": "Gerald Ford",
        "party": "Republican",
        "annual_debt_increase_pct": 12.2
    },
    {
        "year": 1976,
        "president": "Gerald Ford",
        "party": "Republican",
        "annual_debt_increase_pct": 16.4
    },
    {
        "year": 1977,
        "president": "Jimmy Carter",
        "party": "Democratic",
        "annual_debt_increase_pct": 12.6
    },
    {
        "year": 1978,
        "president": "Jimmy Carter",
        "party": "Democratic",
        "annual_debt_increase_pct": 10.4
    },
    {
        "year": 1979,
        "president": "Jimmy Carter",
        "party": "Democratic",
        "annual_debt_increase_pct": 7.1
    },
    {
        "year": 1980,
        "president": "Jimmy Carter",
        "party": "Democratic",
        "annual_debt_increase_pct": 9.8
    },
    {
        "year": 1981,
        "president": "Ronald Reagan",
        "party": "Republican",
        "annual_debt_increase_pct": 9.9
    },
    {
        "year": 1982,
        "president": "Ronald Reagan",
        "party": "Republican",
        "annual_debt_increase_pct": 14.4
    },
    {
        "year": 1983,
        "president": "Ronald Reagan",
        "party": "Republican",
        "annual_debt_increase_pct": 20.6
    },
    {
        "year": 1984,
        "president": "Ronald Reagan",
        "party": "Republican",
        "annual_debt_increase_pct": 14.2
    },
    {
        "year": 1985,
        "president": "Ronald Reagan",
        "party": "Republican",
        "annual_debt_increase_pct": 16.0
    },
    {
        "year": 1986,
        "president": "Ronald Reagan",
        "party": "Republican",
        "annual_debt_increase_pct": 16.6
    },
    {
        "year": 1987,
        "president": "Ronald Reagan",
        "party": "Republican",
        "annual_debt_increase_pct": 10.6
    },
    {
        "year": 1988,
        "president": "Ronald Reagan",
        "party": "Republican",
        "annual_debt_increase_pct": 10.7
    },
    {
        "year": 1989,
        "president": "George H. W. Bush",
        "party": "Republican",
        "annual_debt_increase_pct": 9.8
    },
    {
        "year": 1990,
        "president": "George H. W. Bush",
        "party": "Republican",
        "annual_debt_increase_pct": 13.2
    },
    {
        "year": 1991,
        "president": "George H. W. Bush",
        "party": "Republican",
        "annual_debt_increase_pct": 13.4
    },
    {
        "year": 1992,
        "president": "George H. W. Bush",
        "party": "Republican",
        "annual_debt_increase_pct": 10.9
    },
    {
        "year": 1993,
        "president": "Bill Clinton",
        "party": "Democratic",
        "annual_debt_increase_pct": 8.5
    },
    {
        "year": 1994,
        "president": "Bill Clinton",
        "party": "Democratic",
        "annual_debt_increase_pct": 6.4
    },
    {
        "year": 1995,
        "president": "Bill Clinton",
        "party": "Democratic",
        "annual_debt_increase_pct": 6.0
    },
    {
        "year": 1996,
        "president": "Bill Clinton",
        "party": "Democratic",
        "annual_debt_increase_pct": 5.0
    },
    {
        "year": 1997,
        "president": "Bill Clinton",
        "party": "Democratic",
        "annual_debt_increase_pct": 3.6
    },
    {
        "year": 1998,
        "president": "Bill Clinton",
        "party": "Democratic",
        "annual_debt_increase_pct": 2.1
    },
    {
        "year": 1999,
        "president": "Bill Clinton",
        "party": "Democratic",
        "annual_debt_increase_pct": 2.4
    },
    {
        "year": 2000,
        "president": "Bill Clinton",
        "party": "Democratic",
        "annual_debt_increase_pct": 0.3
    },
    {
        "year": 2001,
        "president": "George W. Bush",
        "party": "Republican",
        "annual_debt_increase_pct": 2.3
    },
    {
        "year": 2002,
        "president": "George W. Bush",
        "party": "Republican",
        "annual_debt_increase_pct": 7.2
    },
    {
        "year": 2003,
        "president": "George W. Bush",
        "party": "Republican",
        "annual_debt_increase_pct": 8.9
    },
    {
        "year": 2004,
        "president": "George W. Bush",
        "party": "Republican",
        "annual_debt_increase_pct": 8.8
    },
    {
        "year": 2005,
        "president": "George W. Bush",
        "party": "Republican",
        "annual_debt_increase_pct": 7.5
    },
    {
        "year": 2006,
        "president": "George W. Bush",
        "party": "Republican",
        "annual_debt_increase_pct": 7.2
    },
    {
        "year": 2007,
        "president": "George W. Bush",
        "party": "Republican",
        "annual_debt_increase_pct": 5.9
    },
    {
        "year": 2008,
        "president": "George W. Bush",
        "party": "Republican",
        "annual_debt_increase_pct": 11.3
    },
    {
        "year": 2009,
        "president": "Barack Obama",
        "party": "Democratic",
        "annual_debt_increase_pct": 18.8
    },
    {
        "year": 2010,
        "president": "Barack Obama",
        "party": "Democratic",
        "annual_debt_increase_pct": 13.9
    },
    {
        "year": 2011,
        "president": "Barack Obama",
        "party": "Democratic",
        "annual_debt_increase_pct": 9.1
    },
    {
        "year": 2012,
        "president": "Barack Obama",
        "party": "Democratic",
        "annual_debt_increase_pct": 8.6
    },
    {
        "year": 2013,
        "president": "Barack Obama",
        "party": "Democratic",
        "annual_debt_increase_pct": 4.2
    },
    {
        "year": 2014,
        "president": "Barack Obama",
        "party": "Democratic",
        "annual_debt_increase_pct": 6.5
    },
    {
        "year": 2015,
        "president": "Barack Obama",
        "party": "Democratic",
        "annual_debt_increase_pct": 1.8
    },
    {
        "year": 2016,
        "president": "Barack Obama",
        "party": "Democratic",
        "annual_debt_increase_pct": 3.7
    }
]


function show_debt(list) {
    let section = document.querySelector('.list');
    for (let i = 0; i < list.length; i++) {
        let president = document.createElement('div');
        president.classList.add('president');

        let name = list[i]['president'];
        let party = list[i]['party'];
        let debt = list[i]['annual_debt_increase_pct'] * 100;

        if (party === 'Democratic') {
            president.classList.add('democratic');
        } else {
            president.classList.add('republican');
        }

        let h1 = document.createElement('h1');
        let p = document.createElement('p');
        let p2 = document.createElement('p');
        h1.innerHTML = name;
        p.innerHTML = party;
        p2.innerHTML = debt + '%'

        president.appendChild(h1);
        president.appendChild(p);
        president.appendChild(p2);
        section.appendChild(president);
    }
}
show_debt(USA_debt)

