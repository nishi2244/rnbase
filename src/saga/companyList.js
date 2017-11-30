import { put, takeEvery, call } from 'redux-saga/effects';

// import getCompanyList from '../api/companyListApi';

function* fetchData(action) {
  // try {
  //   const { data, nextUrl, error } = yield call(getCompanyList, action.nextUrl);
  //
  //   if (!error) {
  //     yield put({ type: COMPANY_LIST_FETCHING_DATA_SUCCESS, data, nextUrl });
  //   } else {
  //     yield put({ type: COMPANY_LIST_FETCHING_DATA_FAILURE });
  //   }
  // } catch (e) {
  //   yield put({ type: COMPANY_LIST_FETCHING_DATA_FAILURE });
  // }
}

function* companyListSaga() {
  // yield takeEvery(COMPANY_LIST_FETCHING_DATA, fetchData);
}

export default companyListSaga;
