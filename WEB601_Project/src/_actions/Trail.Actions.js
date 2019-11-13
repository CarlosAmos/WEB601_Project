import { TrailConstants } from '../_constants';
//import { TrailService } from '../_services';
import { alertActions } from './';
//import { history } from '../_helpers';

export const trailActions = {
    addTrail,
    getTrail,
    delete: _delete
}

function addTrail(Trail) {
    return dispatch => {
        dispatch(request(Trail));

        TrailService.addTrail(Trail)
            .then(
                Trail => {
                    dispatch(success());
                    //history.pushState('/')
                    dispatch(alertActions.success('Trail added'))
                },
                error => {
                    dispatch(failure(error));
                    dispatch(alertActions.error(error))
                }
            );
    };

    function request(Trail) { return { type: TrailConstants.ADDTRAIL_REQUEST, Trail}}
    function request(Trail) { return { type: TrailConstants.ADDTRAIL_SUCCESS, Trail}}
    function failure(error) { return { type: TrailConstants.ADDTRAIL_FAILURE, error}}
}

function getAll() {
    return dispatch => {
        dispatch(request());

        TrailService.getAll()
        .then(
            Trails => dispatch(success(Trails)),
            error => dispatch(failure(error))
        );
    };
    function request() { return { type: TrailConstants.GETALL_REQUEST}}
    function success(Trails) { return { type: TrailConstants.GETALL_SUCCESS, Trails}}
    function failure(error) { return { type: TrailConstants.GETALL_FAILURE, error}}
}

function _delete(id) {
    return dispatch => {
        dispatch(request(id));

        TrailService.delete(id)
        .then(
            Trail => {
                dispatch(success(id));
            },
            error => {
                dispatch(failure(id,error));
            }
        );
    };
    function request(id) { return { type: TrailConstants.DELETE_REQUEST, id}}
    function success(id) {return { type: TrailConstants.DELETE_SUCCESS, id}}
    function failure(id,error) { return { type: TrailConstants.DELETE_FAILURE, id, error}}
}