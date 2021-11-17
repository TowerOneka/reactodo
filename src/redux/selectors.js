import { createSelector } from '@reduxjs/toolkit';

export const tasksSelector = state => state.tasks.todolist;
export const filterSelector = state => state.tasks.filter_count;
export const activeSelector = state => state.tasks.active_count;
export const secondFilter = createSelector(
    tasksSelector,
    items => items.filter(todo => !todo.checked)
);
export const thirdFilter = createSelector(
    tasksSelector,
    items => items.filter(todo => todo.checked)
);