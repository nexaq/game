

## ДИЗАЙН
Собственной разработки строго не судите

## СТИЛИ
Присутствуют элементы из БЭМ'а, но не все так как используется style-modules из-за чего надобность в строгом наименовании компонентов отпадает.


## TODO
убрать нахуй component_mod - потому-что и так понятно что этот компонент нахуя тут БЭМ?!
А вообще подумать об этом

Разбить по нормальному сервисы, пусть будет одна папка node_modules (для экономии) + уязвимость папки dist

еще проблема что @types для всех сервисов общий это дерьмо!

Все импорты в самый низ, из индекса!

## Наименования и структура
snake-case для папок НО для хуков camel-case! 


не надо писать setIsDirty пиши setDirty!!! СУК!!



Я не считаю правильным все класть в redux..


заменить ?? на || где юзается process.env


Объять не объятное не возможно поэтому есть проебы в техничиских знаниях, но есть потенциал и к чему стремится поэтому ищи .. для расскрытия бла бла бла

JWT какшка


загрузка ток через указанный delay

В следующий раз буду хранить загрузку в redux