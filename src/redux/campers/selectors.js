import { createSelector } from '@reduxjs/toolkit';
import { selectFilters } from '../filters/selectors';

export const selectCampers = state => state.campers.items;

export const selectFilteredCampers = createSelector(
  [selectCampers, selectFilters],
  (campers, filters) => {
    const filteredCampers = campers.filter(camper => {
      return (
        camper.location
          .toLowerCase()
          .includes(filters.location.trim().toLowerCase()) &&
        filters.equipment.every(filter => {
          const detailValue = camper.details[filter];
          return detailValue > 0 || camper.transmission === filter;
        }) &&
        camper.form.includes(filters.type)
      );
    });
    return filteredCampers;
  }
);

export const selectLoading = state => state.campers.loading;
export const selectError = state => state.campers.error;
