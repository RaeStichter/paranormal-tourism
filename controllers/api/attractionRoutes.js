// '/' GET - get list of all attractions and // TODO: their vote count
// '/' POST - add a new attraction, verify user level > 2

// '/:id' - GET - get an attraction by id, including its comments and votes, include boolean to let front end know if user owns post
// '/:id' - PUT - update attraction with new info, verify owner or admin
// '/:id' - DELETE - delete an attraction, verify owner or admin

// '/:attraction_id/comments' - POST - add a comment to the attraction, verify logged in
// '/:attraction_id/comments/:id' - Delete a comment, verify owner of comment or admin

// NOT MVP // TODO:
// '/:attraction_id/votes'
// '/:attraction_id/votes/:id's
