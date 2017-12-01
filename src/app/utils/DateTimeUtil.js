import React, {PropTypes} from 'react';

export default class DateTimeUtil {

    static convertDateToStringYYYYmmDDhhMMss(date) {
        if (!date) return;
        year = "" + date.getFullYear();
        month = "" + (date.getMonth() + 1);
        if (month.length === 1) {
            month = "0" + month;
        }
        day = "" + date.getDate();
        if (day.length === 1) {
            day = "0" + day;
        }
        hour = "" + date.getHours();
        if (hour.length === 1) {
            hour = "0" + hour;
        }
        minute = "" + date.getMinutes();
        if (minute.length === 1) {
            minute = "0" + minute;
        }
        second = "" + date.getSeconds();
        if (second.length === 1) {
            second = "0" + second;
        }
        return year + "-" + month + "-" + day + " " + hour + ":" + minute + ":" + second;
    }

    static convertDateToStringYYYYmmDD(date) {
        if (!date) return;
        year = "" + date.getFullYear();
        month = "" + (date.getMonth() + 1);
        if (month.length === 1) {
            month = "0" + month;
        }
        day = "" + date.getDate();
        if (day.length === 1) {
            day = "0" + day;
        }
        return year + "-" + month + "-" + day;
    }

    static getTimeOfDate(date) {
        if (!date) return;
        hour = "" + date.getHours();
        if (hour.length === 1) {
            hour = "0" + hour;
        }
        minute = "" + date.getMinutes();
        if (minute.length === 1) {
            minute = "0" + minute;
        }
        second = "" + date.getSeconds();
        if (second.length === 1) {
            second = "0" + second;
        }
        return hour + ":" + minute + ":" + second;
    }

}