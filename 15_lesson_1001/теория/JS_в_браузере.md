<section class="course-theory__content"><h1 class="course-theory__content-heading course-theory__content-heading--synopsis">Конспект «JS в браузере». Раздел&nbsp;1</h1><div class="course-theory__content-text"><p>Поиск элементов на&nbsp;странице:</p><pre>// Поиск элемента по тегу
let list = document.querySelector('ul');

// Поиск последнего элемента из списка let lastProduct = document.querySelector('li:last-child');

// Поиск элемента по классу let price = document.querySelector('.price');

// Поиск третьего элемента из списка товаров let thirdProduct = document.querySelector('.product:nth-child(3)');

// Поиск <b>всех</b> элементов, подходящих по селектору let listItems = document.querySelectorAll('.product');
</pre><p><code>querySelectorAll</code> возвращает список (коллекцию) элементов. Этот список похож на&nbsp;массив, но&nbsp;им&nbsp;не&nbsp;является. Он&nbsp;называется <i>псевдомассив</i> и&nbsp;его можно перебирать с&nbsp;помощью цикла <code>for</code>.</p><p>Добавление класса элементу страницы:</p><pre>// Когда ищем элемент по классу, используем точку
let product = document.querySelector('.product');

// Но когда добавляем класс, точки нет!
product.classList.add('product--sale');
</pre>

Результат работы <code>classList.add()</code> такой&nbsp;же, как при ручном добавлении класса в&nbsp;разметку:

<pre><i>&lt;!-- Исходное состояние разметки --&gt;</i>
&lt;li class="product"&gt;
  …
&lt;/li&gt;

<i>&lt;!-- Состояние после вызова classList.add --&gt;</i>
&lt;li class="product product--sale"&gt;
  …
&lt;/li&gt;
</pre>