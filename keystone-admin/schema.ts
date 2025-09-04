// Welcome to your schema
//   Schema driven development is Keystone's modus operandi
//
// This file is where we define the lists, fields and hooks for our data.
// If you want to learn more about how lists are configured, please read
// - https://keystonejs.com/docs/config/lists

import { list } from '@keystone-6/core'
import { allowAll } from '@keystone-6/core/access'

// see https://keystonejs.com/docs/fields/overview for the full list of fields
//   this is a few common fields for an example
import {
    text,
    relationship,
    password,
    timestamp,
    select, integer, multiselect, json, image,
} from '@keystone-6/core/fields'

// the document field is a more complicated field, so it has it's own package
import { document } from '@keystone-6/fields-document'
// if you want to make your own fields, see https://keystonejs.com/docs/guides/custom-fields

// when using Typescript, you can refine your types to a stricter subset by importing
// the generated types from '.keystone/types'
import { type Lists } from '.keystone/types'

export const lists: Lists = {

    // ========================
    // Раздел: Пользователи
    // ========================
    User: list({
        access: allowAll,
        ui: {
            labelField: 'name',
            listView: {
                initialColumns: ['name', 'email', 'createdAt'],
                initialSort: { field: 'createdAt', direction: 'DESC' },
            },
            // Заголовок раздела в боковом меню
            description: 'Пользователи системы',
        },
        fields: {
            name: text({ validation: { isRequired: true }, label: 'Имя' }),
            email: text({ validation: { isRequired: true }, isIndexed: 'unique', label: 'Электронная почта' }),
            image: image({ storage: 'my_local_images', label: 'Изображение' }),
            password: password({ validation: { isRequired: true }, label: 'Пароль' }),
            posts: relationship({ ref: 'Post.author', many: true, label: 'Посты пользователя' }),
            createdAt: timestamp({ defaultValue: { kind: 'now' }, label: 'Создано' }),
        },
    }),

    Client: list({
        access: allowAll,
        ui: {
            labelField: 'name',
            listView: {
                initialColumns: ['name', 'phone', 'question', 'overdue', 'debt', 'payment', 'whoOwes'],
                initialSort: { field: 'createdAt', direction: 'DESC' },
            },
            description: 'Клиенты сайта',
        },
        fields: {
            name: text({ validation: { isRequired: true }, label: 'Имя' }),
            phone: text({ validation: { isRequired: true }, isIndexed: 'unique', label: 'Телефон' }),
            question: text({ label: 'Вопрос' }),
            overdue: text({ label: 'Просрочка' }),
            debt: integer({ label: 'Долг' }),
            payment: integer({ label: 'Платёж' }),
            whoOwes: json({ defaultValue: [""], label: 'Кто должен' }),
            createdAt: timestamp({ defaultValue: { kind: 'now' }, label: 'Создано' }),
        },
    }),

    // ========================
    // Раздел: Наполнение сайта
    // ========================
    Post: list({
        access: allowAll,
        ui: {
            labelField: 'title',
            description: 'Посты на сайте',
            listView: {
                initialColumns: ['title', 'author', 'createdAt'],
                initialSort: { field: 'createdAt', direction: 'DESC' },
            },
        },
        fields: {
            title: text({ validation: { isRequired: true }, label: 'Заголовок' }),
            description: text({ label: 'Описание' }),
            content: document({
                formatting: true,
                layouts: [
                    [1, 1],
                    [1, 1, 1],
                    [2, 1],
                    [1, 2],
                    [1, 2, 1],
                ],
                links: true,
                dividers: true,
                label: 'Контент',
            }),
            Categories: json({
                defaultValue: ["Пример 1", "Пример 2"],
                label: 'Категории'
            }),
            views: integer({ defaultValue: 0 }),
            image: image({ storage: 'my_local_images', label: 'Изображение' }),
            author: relationship({ ref: 'User.posts', many: false, label: 'Автор' }),
            createdAt: timestamp({ defaultValue: { kind: 'now' }, label: 'Создано' }),
        },
    }),

    Component: list({
        access: allowAll,
        ui: {
            labelField: 'title',
            description: 'Компоненты страниц',
            listView: {
                initialColumns: ['title', 'slug', 'createdAt'],
                initialSort: { field: 'createdAt', direction: 'DESC' },
            },
        },
        fields: {
            title: text({ label: 'Название', validation: { isRequired: true } }),
            slug: text({ validation: { isRequired: true }, isIndexed: 'unique', label: 'Slug' }),
            content: json({ label: 'Контент' }),
            createdAt: timestamp({ defaultValue: { kind: 'now' }, label: 'Создано' }),
        },
    }),

    Review: list({
        access: allowAll,
        ui: {
            labelField: 'createdAt',
            description: 'Отзывы пользователей',
            listView: {
                initialColumns: ['image', 'createdAt'],
                initialSort: { field: 'createdAt', direction: 'DESC' },
            },
        },
        fields: {
            image: image({ storage: 'my_local_images', label: 'Изображение' },),
            content: document({
                formatting: true,
                layouts: [[1,1],[1,1,1],[2,1],[1,2],[1,2,1]],
                links: true,
                dividers: true,
                label: 'Контент',
            }),
            createdAt: timestamp({ defaultValue: { kind: 'now' }, label: 'Создано' }),
        },
    }),
    Advantage: list({
        access: allowAll,
        ui: {
            labelField: 'title',
            description: 'Преимущества работы с нами',
            listView: {
                initialColumns: ['title', 'content', 'createdAt'],
                initialSort: { field: 'createdAt', direction: 'DESC' },
            },
        },
        fields: {
            title: text({ validation: { isRequired: true }, label: 'Заголовок' }),
            content: document({
                formatting: true,
                layouts: [[1,1],[1,1,1],[2,1],[1,2],[1,2,1]],
                links: true,
                dividers: true,
                label: 'Контент',
            }),
            createdAt: timestamp({ defaultValue: { kind: 'now' }, label: 'Создано' }),
        },
    }),
    Service: list({
        access: allowAll,
        ui: {
            labelField: 'title',
            description: 'Услуги',
            listView: {
                initialColumns: ['title', 'content', 'createdAt'],
                initialSort: { field: 'createdAt', direction: 'DESC' },
            },
        },
        fields: {
            title: text({ validation: { isRequired: true }, label: 'Заголовок' }),
            content: document({
                formatting: true,
                layouts: [[1,1],[1,1,1],[2,1],[1,2],[1,2,1]],
                links: true,
                dividers: true,
                label: 'Контент',
            }),
            createdAt: timestamp({ defaultValue: { kind: 'now' }, label: 'Создано' }),
        },
    }),

    Calculator: list({
        access: allowAll,
        ui: {
            labelField: 'title',
            description: 'Настройки калькулятора',
            listView: {
                initialColumns: ['title', 'isActive', 'createdAt'],
                initialSort: { field: 'createdAt', direction: 'DESC' },
            },
        },
        fields: {
            title: text({ validation: { isRequired: true }, label: 'Название конфигурации' }),
            isActive: select({
                type: 'enum',
                options: [
                    { label: 'Активна', value: 'active' },
                    { label: 'Неактивна', value: 'inactive' }
                ],
                defaultValue: 'inactive',
                label: 'Статус'
            }),
            
            // Заголовки
            overdueTitle: text({ 
                defaultValue: 'Имеются ли просрочки?', 
                label: 'Заголовок вопроса о просрочках' 
            }),
            debtTitle: text({ 
                defaultValue: 'Сумма долга', 
                label: 'Заголовок поля суммы долга' 
            }),
            paymentTitle: text({ 
                defaultValue: 'Месячный платёж', 
                label: 'Заголовок поля месячного платежа' 
            }),
            whoOwesTitle: text({ 
                defaultValue: 'Перед кем долги?', 
                label: 'Заголовок вопроса о кредиторах' 
            }),
            
            // Максимальные значения для range
            debtMax: integer({ 
                defaultValue: 1000000, 
                label: 'Максимальная сумма долга (в рублях)' 
            }),
            paymentMax: integer({ 
                defaultValue: 40000, 
                label: 'Максимальный месячный платёж (в рублях)' 
            }),
            
            // Варианты просрочек
            overdueOptions: json({ 
                defaultValue: ["<1 месяца", ">1 месяца", ">6 месяцев", ">1 года", "Плачу вовремя"],
                label: 'Варианты ответов о просрочках (массив строк)' 
            }),
            
            // Варианты кредиторов
            whoOwesOptions: json({ 
                defaultValue: ["МФО", "Штрафы", "Налоги", "Банки", "ЖКХ", "Другой вариант"],
                label: 'Варианты кредиторов (массив строк)' 
            }),
            
            // Тексты кнопок и модального окна
            submitButtonText: text({ 
                defaultValue: 'Расчитать стоимость', 
                label: 'Текст кнопки отправки' 
            }),
            modalTitle: text({ 
                defaultValue: 'Поздравляем!', 
                label: 'Заголовок модального окна' 
            }),
            modalSubtitle: text({ 
                defaultValue: 'Вы сможете списать свои задолженности по закону', 
                label: 'Подзаголовок модального окна' 
            }),
            modalDescription: text({ 
                defaultValue: 'Наш специалист расскажет подробности по телефону', 
                label: 'Описание в модальном окне' 
            }),
            modalInstruction: text({ 
                defaultValue: 'От вас потребуется Номер телефона и Имя', 
                label: 'Инструкция в модальном окне' 
            }),
            modalSubmitText: text({ 
                defaultValue: 'Отправить заявку', 
                label: 'Текст кнопки отправки в модальном окне' 
            }),
            
            createdAt: timestamp({ defaultValue: { kind: 'now' }, label: 'Создано' }),
        },
    }),
} satisfies Lists

