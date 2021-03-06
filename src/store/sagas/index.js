import { all, takeLatest } from 'redux-saga/effects';

import { Types as NearbyRestaurantsTypes } from '../../store/ducks/nearby-restaurants';
import { Types as SearchRestaurantsTypes } from '../../store/ducks/search-restaurants';
import { Types as RestaurantTypes } from '../../store/ducks/restaurant';
import { Types as EventTypes } from '../../store/ducks/events';
import { Types as HomeTypes } from '../../store/ducks/home';
import { Types as UsersTypes } from '../../store/ducks/users';
import { Types as DishTypes } from '../../store/ducks/dish';

import { requestNearbyRestaurants } from './nearby-restaurants';
import { requestSearchRestaurants } from './search-restaurants';
import { requestAllEvents, requestEventDetails } from './events';
import { requestRestaurantDetail } from './restaurant';
import { homeRequest } from './home';
import { usersRequest } from './users';
import { requestDishDetail, requestAllDishes } from './dish';


export default function* rootSaga() {

  console.log('rootSaga');

  return yield all([
    takeLatest(
      NearbyRestaurantsTypes.GET_NEAR_BY_RESTAURANTS_REQUEST,
      requestNearbyRestaurants,
    ),
    takeLatest(
      SearchRestaurantsTypes.SEARCH_RESTAURANTS_REQUEST,
      requestSearchRestaurants,
    ),
    takeLatest(RestaurantTypes.GET_DETAIL_REQUEST, requestRestaurantDetail),
    takeLatest(EventTypes.GET_EVENT_DETAILS_REQUEST, requestEventDetails),
    takeLatest(EventTypes.GET_ALL_EVENTS_REQUEST, requestAllEvents),
    takeLatest(HomeTypes.GET_REQUEST, homeRequest),
    takeLatest(UsersTypes.GET_ALL_USERS_REQUEST, usersRequest),
    takeLatest(DishTypes.GET_DISH_DETAIL_REQUEST, requestDishDetail),
    takeLatest(DishTypes.GET_ALL_DISHES_REQUEST, requestAllDishes),
  ]);
}
