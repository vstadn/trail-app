"use strict";
var Task = (function () {
    function Task() {
    }
    Task.prototype.shallRun = function (files) {
        return true;
    };
    return Task;
}());
exports.Task = Task;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFzay5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInRhc2sudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUdBO0lBQUE7SUFxQkEsQ0FBQztJQWRDLHVCQUFRLEdBQVIsVUFBUyxLQUFlO1FBQ3RCLE1BQU0sQ0FBQyxJQUFJLENBQUM7SUFDZCxDQUFDO0lBWUgsV0FBQztBQUFELENBQUMsQUFyQkQsSUFxQkM7QUFyQnFCLG9CQUFJIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBCYXNlIGNsYXNzIGZvciBhbGwgdGFza3MuXG4gKi9cbmV4cG9ydCBhYnN0cmFjdCBjbGFzcyBUYXNrIHtcbiAgLyoqXG4gICAqIE92ZXJyaWRlIHRoaXMgdGFzayBpZiB5b3Ugd2FudCB0byBpbXBsZW1lbnQgc29tZSBjdXN0b21cbiAgICogdGFzayBhY3RpdmF0aW9uIG1lY2hhbmlzbS4gQnkgZGVmYXVsdCBlYWNoIHRhc2sgd2lsbCBiZSBhbHdheXMgZXhlY3V0ZWQuXG4gICAqXG4gICAqIEBwYXJhbSB7c3RyaW5nW119IGZpbGVzIEEgbGlzdCBvZiBmaWxlcyBjaGFuZ2VkIHNpbmNlIHRoZSBwcmV2aW91cyB3YXRjaC5cbiAgICovXG4gIHNoYWxsUnVuKGZpbGVzOiBzdHJpbmdbXSk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0cnVlO1xuICB9XG5cbiAgLyoqXG4gICAqIEltcGxlbWVudHMgeW91ciB0YXNrIGJlaGF2aW9yLlxuICAgKlxuICAgKiBAcGFyYW0ge2FueX0gZG9uZSBBIGZ1bmN0aW9uIHdoaWNoIHNob3VsZCBiZSBhY3RpdmF0ZWQgb25jZSB5b3VyIHRhc2sgY29tcGxldGVzLlxuICAgKiBAcmV0dXJuIHtSZWFkV3JpdGVTdHJlYW0gfCBQcm9taXNlPGFueT4gfCB2b2lkfSBUaGlzIG1ldGhvZCBjYW4gZWl0aGVyIHJldHVybiBhIHByb21pc2VcbiAgICogd2hpY2ggc2hvdWxkIGJlIHJlc29sdmVkIG9uY2UgeW91ciB0YXNrIGV4ZWN1dGlvbiBjb21wbGV0ZXMsIGEgc3RyZWFtXG4gICAqIHdoaWNoIHNob3VsZCB0aHJvdyBhbiBlbmQgZXZlbnQgb25jZSB5b3VyIHRhc2sgZXhlY3V0aW9uIGNvbXBsZXRlc1xuICAgKiBvciBub3RoaW5nIGluIGNhc2UgeW91IHdpbGwgbWFudWFsbHkgaW52b2tlIHRoZSBgZG9uZWAgbWV0aG9kLlxuICAgKi9cbiAgYWJzdHJhY3QgcnVuKGRvbmU/OiBhbnksIGZpbGVzPzogc3RyaW5nW10pOiBhbnkgfCBQcm9taXNlPGFueT4gfCB2b2lkO1xufVxuIl19