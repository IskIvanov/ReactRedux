// important Actions should have a type property !!!
export function createCourse(course) { 
	return { type: "CREATE_COURSE", course: course }
 }