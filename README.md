[![CI](https://github.com/unLomTrois/files-server-test-task/actions/workflows/main.yml/badge.svg)](https://github.com/unLomTrois/files-server-test-task/actions/workflows/main.yml)

# Тестовое задание

### Запуск сервера:
```bash
# Установить зависимости
npm install

# Запуск проекта
npm run start:dev
```
<br>

Ссылка на api: [localhost:3000](http://localhost:3000)

Открыть файл: [localhost:3000/files/2981c30294ab58ec864e2f9df455fff512f61020.txt](http://localhost:3000/files/2981c30294ab58ec864e2f9df455fff512f61020.txt)

<br>

<br>

### Задачи:
- [x] Исправить баг с отображением файлов
- [x] Реализовать api запрос на получение всех файлов

<br>

### Про баг
При переходе по [localhost:3000/files/2981c30294ab58ec864e2f9df455fff512f61020.txt](http://localhost:3000/files/2981c30294ab58ec864e2f9df455fff512f61020.txt), должен отображаться текстовый файл. Но вместо него, отображается пустая страница. Нужно исправить ошибку и убедиться в правильном отображении файлов

<br>

### Про запрос на получение всех файлов
При переходе по [localhost:3000/files](http://localhost:3000/files), нужно выводить массив всех доступных файлов, из private/resources:
```json
{
  "files": [
    "274fa73e699fc04ad8caa976f46d7087467268af.gif",
    "2981c30294ab58ec864e2f9df455fff512f61020.txt",
    //...
    "f2e260820616a14016648f606ddd02fb3dce45f0.png"
  ]
}
```

<br>
