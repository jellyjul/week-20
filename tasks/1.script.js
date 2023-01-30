// 1. Делаем базу супергероев Марвел. На основе статьи [https://www.ellegirl.ru/articles/vse-o-15-samyih-krutyih-supergeroyah/](https://www.ellegirl.ru/articles/vse-o-15-samyih-krutyih-supergeroyah/) составьте JSON с массивом супергероев. Сделайте страничку-галерею, где можно будет просматривать информацию о героях по этим данным.

//     Что должна уметь страничка: 

//     - показать информацию о героях: их картинки, характеристики, подробное описание
//     - поставить герою личную оценку (*сохраняем значения в localStorage*)
//     например, 10/10 или 2/10, как рейтинг

//     Дизайн на ваше усмотрение.

let json = `[{
    "name": "Бетмен",
    "universe": "DC Comics",
    "alterego": "Брюс Уэйн",
    "occupation": "борец с преступностью, филантроп, миллиардер",
    "friends": "Робин, Бэтгерл",
    "superpowers": "интеллект, обширные познания, знания боевых искусств, ловкость",
    "url": "https://n1s1.hsmedia.ru/13/a5/b2/13a5b2373d5e23489d9a4949ada5b927/547x397_0xac120002_8752067681540468870.jpg",
    "info": "По популярности человек-летучая мышь может сравниться только с Суперменом. Его образ кажется очень мистическим и мрачным: черный костюм с развевающимся плащом, устрашающий Бэтмобиль, штаб-квартира в сырой пещере. Его биография настолько же темна, как и образ. В детстве у него на глазах убили родителей, и юный Брюс поклялся всеми силами защищать родной Готэм от преступности. Брюс знаменит, несмотря на пожилой возраст: первый выпуск с его участием вышел аж в 1939 году. С каждым годом популярность только крепнет. Большую роль в этом сыграли экранизации: «Темный рыцарь», сериал «Готэм» и несколько одноименных картин. Главная причина такой любви среди фанатов — мысль, что каждый может стать Бэтменом. Если подумать, это один из немногих героев, кто добился своего положения за счет ума и упорства, а не за счет мутаций."
},{
    "name": "Супермен",
    "universe": "DC Comics",
    "alterego": "Кларк Кент",
    "occupation": "борец за справедливость",
    "friends": "собака Крипто",
    "superpowers": "непробиваемость, суперсила, полёт, самоисцеление, суперзрение и суперслух, классный костюм",
    "url" : "https://n1s1.hsmedia.ru/06/d3/73/06d37321618034ec5f2a65b09c8576e3/547x397_0xac120002_45567661540468871.jpg",
    "info": "Полная противоположность своему противнику Бэтмену. Если Брюс Уэйн был простым человеком и стал героем, то Супермен героем родился, но вынужден был изображать выходца из бедной канзасской семьи. Последний представитель планеты Криптон был отправлен на Землю прямо перед тем, как его родина была уничтожена. Супермен — некий хамелеон от мира комиксов. В своем первом выпуске в 1938 году он был просто человек-огромный мускул, который умел только разбивать стены и выбивать двери. Позднее к его умениям добавилась способность летать. Дальше у многочисленных воплощений Кларка, от подростка в «Тайнах Смоллвиля» до величественного «Человека из стали», разный уровень и количество суперспособностей. Неизменным остается его слабое место — уязвимость к Криптониту, радиоактивному веществу с родной планеты." 
},{
    "name": "Железный человек",
    "universe": "Marvel Comics",
    "alterego": "Тони Старк",
    "occupation": "гений, миллиардер, плейбой, филантроп",
    "friends": "Мстители",
    "superpowers": "высокий уровень интеллекта, широкие познания науки и техники, связь со всемирной паутиной, бронекостюмы",
    "url" : "https://n1s1.hsmedia.ru/7b/56/08/7b5608ec3df83d872fa1162fb9e32f28/547x397_0xac120002_1773711401540468871.jpg",
    "info": "Пожалуй, самый популярный современный супергерой. У него много общего с мрачной птицей ночи Бэтменом: оба потеряли родителей в детстве, стали борцами с преступностью без особых сверхсил, невероятно богатые. Только если Бэтменом восхищаются, то Тони Старка — обожают :) То ли дело в шикарной актерской игре Роберта Дауни мл., который выбил роль у Николаса Кейджа и Тома Круза, то ли в хорошо прописанном персонаже. Прототипом для героя послужили Илон Маск и изобретатель Говард Хьюз. Железный Человек не всегда ходил в красном модном костюме: в своих первых версиях 1963 года он был скромного серого цвета. Увы, в киновоплощении бронекостюм даже не из металла — его делали из пластика и стекловолокна."
},{
    "name": "Спайдер-мен/Человек-паук",
    "universe": "Marvel Comics",
    "alterego": "Питер Паркер",
    "occupation": "борец за справедливость, студент, фотограф",
    "friends": "Мстители, Фантастическая четверка, Люди Икс",
    "superpowers": "сверхчеловеческие рефлексы, «паучье чутьё», способность прилепляться к твердым поверхностям, производство паутины",
    "url" : "https://n1s1.hsmedia.ru/37/39/74/373974effcc7ccd093d849e8fa062091/547x397_0xac120002_9548247751540468871.jpg",
    "info": "Человек-паук родился от потребности Marvel Comics создать героя-подростка. Другие супергерои вроде Бэтмена и Супермена — взрослые мужчины, и целевая аудитория не видела в них примеры для подражания. Пятнадцатилетний Питер Паркер дал понять всем тинейджерам Земли, что можно и злодеев уничтожить, и на красавице жениться. Для этого даже не обязательно быть суперкрасавчиком! Всего лишь нужен укус паучка:) Питер не сразу использовал свои силы во благо людей: изначально он хотел делать на них деньги, участвуя в нелегальных боях без правил. Затем его любимый дядя Бен умер от рук грабителя, и подросток поклялся, что очистит свой родной Нью-Йорк ото зла. Однако спустя время подросток понял, что одной клятвы недостаточно и что «с великой силой приходит великая ответственность». Кстати, не все суперсилы у Питера появились за счет мутации: парень самостоятельно взломал технологию Тони Старка, после чего заслужил его признание. "
},{
    "name": "Капитан Америка",
    "universe": "Marvel Comics",
    "alterego": "Стивен Роджерс",
    "occupation": "супер-солдат",
    "friends": "Мстители",
    "superpowers": "сила, выносливость, бессмертие, быстрая регенерация, мастерство скрытности и боя",
    "url" : "https://n1s1.hsmedia.ru/41/8f/05/418f050c767eeca8854b328914c7bccc/547x397_0xac120002_20106541761540468871.jpg",
    "info": "Капитан Америка — персонаж, целеноправленно созданный, чтобы воплощать идеалы патриотизма. Потому он был особенно популярный во время Второй мировой войны. В комиксах обращение «Капитан Америка» применяется к любому, кто выбран правительством США. Больше всего оно закрепилось именно за Стивом Роджерсом. Стив родился в 1917 году в семье ирландских эмигрантов Сары и Джозефа Роджерсов. В детстве он был очень слабым юношей и постоянно подвергался насмешкам со стороны других ребят. Ирландские корни давали о себе знать, потому парень от драки не лез. В начале Второй мировой войны Стивен стремился попасть на фронт. Естественно, из-за здоровья ему отказывали. По воле судьбы ему предложили принять участие в секретном оборонном проекте, целью которого было создание суперсолдат. Несмотря на сложности во время эксперимента, результат был успешным. Роджерс превратился из хилого юноши в настоящего Аполлона. Актер Крис Эванс с этой ролью вполне справился:)"
},{
    "name": "Тор",
    "universe": "Marvel Comics",
    "alterego": "нет; полное имя — Тор Одинсон",
    "occupation": "борец за справедливость, скандинавский бог",
    "friends": "Мстители",
    "superpowers": "всё, что может бог, плюс молот Мьелнир",
    "url" : "https://n1s1.hsmedia.ru/52/a3/e1/52a3e14a0c8f02715b763e7a20fe1c00/547x397_0xac120002_19311926741540468872.jpg",
    "info": "Персонаж Тора основан на образе одноименного скандинавского бога. Тор во вселенной Marvel — родной сын Одина и древнейшей богини Геи. После рождения сына Один забрал его в Асгард, где растил вместе со своей женой, богиней Фригг. Последнюю Тор всегда считал своей настоящей матерью и лишь много позже узнал правду о своем рождении. Стоит сказать, что до нынешнего Тора в исполнении Криса Хемсворта у супергероя было несколько воплощений. В одном из них он погиб в схватке с мифическим змеем Мидгардом. Это привело к Рагнареку — некоему апокалипсису в скандинавской мифологии. "
},{
    "name": "Черная вдова",
    "universe": "Marvel Comics",
    "alterego": "Наташа Романофф",
    "occupation": "супергероиня, шпионка",
    "friends": "Мстители",
    "superpowers": "пик человеческого физического потенциала, замедленное старение, знание многих языков",
    "url" : "https://n1s1.hsmedia.ru/e0/2b/55/e02b55b147eeaff9b3fe6bdbb36ff9ea/547x397_0xac120002_744074131540468872.jpg",
    "info": "Супергероиня российского происхождения, родилась предположительно в 1928 году в Сталинграде. Во время Второй мировой войны она потеряла родителей и была спасена из горящего дома советским солдатом. Тот на некоторое время стал её опекуном. Повзрослев, Наташа попала в организацию «Красная Комната», где прошла многочисленные тренировки, а именно — была частью шпионской программы. Там же ей вживили сыворотку Суперсолдата, как у Капитана Америки, но в советском варианте. Благодаря ей, Наташа может использовать максимальные возможности своего организма: силу, гибкость, скорость, ловкость и т. д. Также сыворотка даёт эффект замедленного старения. По мнению фанатов, самое главное преимущество Чёрной Вдовы — то, что её сыграла красотка Скарлетт Йоханссон :) "
},
{
    "name": "Халк",
    "universe": "Marvel Comics",
    "alterego": "Брюс Беннер",
    "occupation": "супергерой, борец за справедливость, ученый-биохимик",
    "friends": "Мстители",
    "superpowers": "сверхчеловеческая сила и скорость, выносливость, полёт",
    "url" : "https://n1s1.hsmedia.ru/9a/28/e7/9a28e7b059594fc10387669ae4bd2f22/547x397_0xac120002_20162335021540468872.jpg",
    "info": "Идею создания Халка как персонажа можно отнести к фантастической новелле «Странная история доктора Джекила и мистера Хайда», в которой ученый не может примириться со своим демоническим альтер эго. Прошлое у Халка — хуже некуда: отец Брюса страдал от алкоголизма и приступов ярости, а мать пыталась всеми силами уберечь сына от гнева своего мужа. Она погибла, защищая своего единственного ребенка от его побоев. Пронеся через все детство тяжелый психологический груз, Брюс вырос в чрезвычайно одаренного, но замкнутого юношу. Хотя Брюс не мог уважать отца, но пошел в науке по его стопам и выбрал ядерную физику. Во время эксперимента он ввел себе пробную сыворотку и подверг себя воздействию большого количества гамма-радиации. Беннер превратился в мускулистого неуправляемого гиганта, который крушил все вокруг и не понимал, что происходит. Так имя Халка стало нарицательным для людей, который не могут держать себя в руках."
},{
    "name": "Чудо-женщина",
    "universe": "DC Comics",
    "alterego": "Диана Принс",
    "occupation": "супергероиня, секретарь-референт",
    "friends": "Лига Справедливости, Бэтмен, Супермен",
    "superpowers": "сверхчеловеческая сила искорость, выносливость, полёт",
    "url" : "https://n1s1.hsmedia.ru/87/ed/c5/87edc525d8813c7b2899e04a4e562fe9/547x397_0xac120002_6444132261540468872.jpg",
    "info": "Пора бы разбавить эту мужскую вечеринку по-настоящему крутой девчонкой :) Принцесса-амозонка родилась на мистическом острове Темескира, расположенном в центре Бермудского треугольника, где пропадают самолеты. Своё настоящее имя Диана она получила в честь древнегреческой богини охоты, а суперспособности от богини любви Афродиты. Растили героиню в исключительно женском обществе, поэтому Чудо-женщина часто появляется в культуре как символ феминизма. У Дианы есть супер-снаряжение: лассо истины и тиара. Первое было сковано богом огня Гефестом, и оно никогда не промахивается. Человек, попавший в его петлю, неизбежно расскажет свои секреты, вспомнит забытое и даже подчинится приказам. Тиара же работает как метательное оружие, способное рассечь что угодно. Корона со звездой в центре символизирует патриотизм американской героини и служит стильным аксессуаром :)"
}]`

console.log(json)
document.addEventListener("DOMContentLoaded", function () {
    let heroes = JSON.parse(json);
    console.log(heroes)
    let heroesContent = '';
    for (let hero of heroes) {
        heroesContent += `
        
        <div class="heroes__container">
        <div class = "heroes__photo"> 
        <img src = " ${hero.url} ">
        </div>
        <h2> ${hero.name}</h2>
        <div class="heroes__title">Вселенная: 
        <span class="heroes__subtitle"> ${hero.universe}</span>  
        </div>
        <div class="heroes__title">   Альтер эго:
        <span class="heroes__subtitle"> ${hero.alterego} </span> 
        </div>
        <div class="heroes__title">  Род деятельности:
        <span class="heroes__subtitle"> ${hero.name}</span>
        </div>
        <div class="heroes__title">  Друзья:
        <span class="heroes__subtitle">${hero.friends} </span>
        </div>
        <div class="heroes__title">  Суперсилы:
        <span class="heroes__subtitle"> ${hero.superpowers} </span>
        </div>
        <div class="star-container">
	    <button type="button" class="trigger"> Подробнее </button>
	    <div class="content heroes__subtitle">	${hero.info}</div>
        </div>
        <form id = "1">
        <fieldset>
            <span class="star-cb-group">
                <input class="container__input" type="radio" id="rating-1" name="rating" value="1" /><label class="icon" for="rating-5">5</label>
                <input class="container__input" type="radio" id="rating-2" name="rating" value="2"  /><label class="icon" for="rating-4">4</label>
                <input class="container__input" type="radio" id="rating-3" name="rating" value="3" /><label class="icon" for="rating-3">3</label>
                <input class="container__input" type="radio" id="rating-4" name="rating" value="4" /><label class="icon" for="rating-2">2</label>
                <input class="container__input" type="radio" id="rating-5" name="rating" value="5" /><label class="icon"  for="rating-1">1</label>
            </span>
        </fieldset>
    </form> 
        </div>
        </div>`


        const root = document.querySelector('.root');

        root.addEventListener('click', (event) => {
            console.log(event.target)
        if (event.target.classList.contains('container__input')) {
            const form = event.target;
            console.log(form)

            const key = form.id;
            console.log(key)
            const value = event.target.value;
            console.log(value)

            localStorage.setItem(key, value);

            const icons = document.querySelector('.icon')
            console.log(icons)
            icons.forEach((elem) => {
                elem.style = 'fill: black';
            })

            for (let i = 0; i < inputs.length; i++) {
                icons[i].style = 'fill: gold';
                if (inputs[i].checked) {
                break
                }
            }
        }
        })
    }
    document.getElementById("heroes__content").innerHTML = heroesContent

}
)

let containers;
function initDrawers() {
    // Get the containing elements
    containers = document.querySelectorAll(".star-container");
    setHeights();
    wireUpTriggers();
    window.addEventListener("resize", setHeights);
}
window.addEventListener("load", initDrawers);

function setHeights() {
    containers.forEach(container => {
        // Get content
        let content = container.querySelector(".content");
        // Needed if this is being fired after a resize
        content.removeAttribute("aria-hidden");
        // Height of content to show/hide
        let heightOfContent = content.getBoundingClientRect().height;
        // Set a CSS custom property with the height of content
        container.style.setProperty("--containerHeight", `${heightOfContent}px`);
        // Once height is read and set
        setTimeout(e => {
            container.classList.add("height-is-set");
            content.setAttribute("aria-hidden", "true");
        }, 0);
    });
}

function wireUpTriggers() {
    containers.forEach(container => {
        // Get each trigger element
        let btn = container.querySelector(".trigger");
        // Get content
        let content = container.querySelector(".content");
        btn.addEventListener("click", () => {
            container.setAttribute(
                "data-drawer-showing",
                container.getAttribute("data-drawer-showing") === "true" ? "false" : "true"
            );
            content.setAttribute(
                "aria-hidden",
                content.getAttribute("aria-hidden") === "true" ? "false" : "true"
            );
        });
    });
}



// let parent = document.querySelector(".marvel");
// let form = document.createElement("form");
// parent.parentNode.append(form)

// let fieldset = document.createElement("fieldset");
// form.append(fieldset)

// let starGroup =  document.createElement("span");
// starGroup.classList.add('star-cb-group')
// fieldset.append(starGroup)

// let inputStar1 = document.createElement("input");
// inputStar1.type = "radio"
// inputStar1.id = "rating-1"
// inputStar1.name = "rating"
// starGroup.append(inputStar1)

// let label1 = document.createElement('label')
// label1.htmlFor="rating"
// inputStar1.append(label1)

// let inputStar2 = document.createElement("input");
// inputStar2.type = "radio"
// inputStar2.id = "rating-2"
// inputStar2.name = "rating"
// starGroup.append(inputStar2)

// let label2 = document.createElement('label')
// label2.htmlFor="rating"
// inputStar2.append(label2)

// let inputStar3 = document.createElement("input");
// inputStar3.type = "radio"
// inputStar3.id = "rating-3"
// inputStar3.name = "rating"
// starGroup.append(inputStar3)

// let label3 = document.createElement('label')
// label3.htmlFor="rating"
// inputStar3.append(label3)

// let inputStar4 = document.createElement("input");
// inputStar4.type = "radio"
// inputStar4.id = "rating-4"
// inputStar4.name = "rating"
// starGroup.append(inputStar4)

// let label4 = document.createElement('label')
// label4.htmlFor="rating"
// inputStar4.append(label4)

// let inputStar5 = document.createElement("input");
// inputStar5.type = "radio"
// inputStar5.id = "rating-5"
// inputStar5.name = "rating"
// starGroup.append(inputStar5)

// let label5 = document.createElement('label')
// label5.htmlFor="rating"
// inputStar5.append(label5)