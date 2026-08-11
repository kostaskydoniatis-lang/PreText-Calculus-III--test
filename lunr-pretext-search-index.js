var ptx_lunr_search_style = "textbook";
var ptx_lunr_docs = [
{
  "id": "front-colophon",
  "level": "1",
  "url": "front-colophon.html",
  "type": "Colophon",
  "number": "",
  "title": "Colophon",
  "body": "  "
},
{
  "id": "sec-ch01-01-Vectors2DIntroduction",
  "level": "1",
  "url": "sec-ch01-01-Vectors2DIntroduction.html",
  "type": "Section",
  "number": "1.1",
  "title": "Vectors in 2D",
  "body": " Vectors in 2D   Vectors   A vector is an object defined by     its magnitude (length)    and its direction.     They are geometrically represented by rays\/arrows and symbolically with a lowercase letter with an arrow above it or in bold face (such as or or , etc.).    We will be drawing 2D vectors in the -plane (Cartesian plane). In this setting, we can define a vector by stating its starting point (arrow tail) and ending point (arrow head).  When a vector is given by its starting point and ending point , we can represent the vector symbolically using .    Draw the vectors below with given starting and ending points:  (a) and   (b) and    Two vectors drawn in the xy-plane: PQ from (0,0) to (3,2) and RS from (0.5,2) to (3.5,4).   What can we say about the vectors and ?     Moving from to we travel 3 units in the direction and 2 units in the direction. Moving from to we travel units in the direction and units in the direction. Since the two arrows describe the same displacement, they have the same magnitude and the same direction; the only difference between them is where they start.     Equivalent Vectors  Vectors are said to be equivalent vectors if they have the same magnitude and direction (independent of their starting and ending points).    Vectors in Standard Position   If the starting point of a vector is the origin (the point ), we say the vector is in standard position.  Given a vector in standard position, if its ending point is ( ), we write down the vector as     and we say that is the -component of and is the -component of .     [Writing a Vector in Standard Position]  Suppose a vector has starting point and ending point . The ending point of , in standard position, is .  In other words,     Writing a vector in standard position simply shifts the vector so that its starting point is the origin.     Graph the vector with starting point and ending point ; write the vector in standard position; and then graph the vector in standard position.   A vector from P(2,1) to Q(-1,0) and the same vector in standard position from (0,0) to (-3,-1).      Both graphs are shown above. Using the formula, the ending point of the vector in standard position is , so   This is the arrow starting at the origin and ending at : the original vector shifted so that its starting point is the origin.     Magnitude of a Vector   To find the magnitude\/length of a vector:     Put the vector in standard position.    If the vector is given by , then its magnitude, denoted by |v|, is given by            Find the length of the vector with starting point and ending point . Graph this vector (in standard position) and verify that the formula for length is the Pythagorean Theorem.   The vector from P(1,-2) to Q(4,2). In standard position, forms a right triangle with legs 3 and 4 and hypotenuse 5.      In standard position the vector is   so its length is   As the graph above shows, in standard position the vector is the hypotenuse of a right triangle whose horizontal leg has length 3 (the -component) and whose vertical leg has length 4 (the -component). The magnitude formula squares the two legs, adds them, and takes the square root, which is exactly the Pythagorean Theorem: .     Direction of a Vector   To find the direction of a vector:     Put the vector in standard position.    If the vector is given by , its direction is the angle starting on the positive x -axis and measured counter-clockwise ending on the vector .         Find the direction of .   The vector v = (-2,-4) in standard position in the third quadrant, with the angle theta measured counter-clockwise from the positive x-axis. The angle phi is the portion of theta past the negative x-axis.      Both components of are negative, so the vector lies in the third quadrant and its direction angle satisfies . The angle that makes with the negative -axis satisfies   Hence, measuring counter-clockwise from the positive -axis,      The zero vector is the only vector with zero magnitude and no direction.     From now on, any time a vector is mentioned, assume it is in standard position (unless stated otherwise).    [Adding and Subtracting Vectors]  To add\/subtract two vectors and , you add\/subtract the corresponding and components.   The result of adding\/subtracting two vectors is again a vector.    Important: Vector subtraction is not commutative. Hence, (unless ).     Compute and where and .     Adding and subtracting the corresponding components:   Note that both results are again vectors, and that computing instead would give a different (opposite) vector.     There is a geometric interpretation for vector addition\/subtraction. We can see it using the Triangle Rule.  The Triangle Rule states that in order to compute :     Draw in standard position.    Starting at the endpoint of , draw the vector .    Draw a vector starting at and ending at the end of the vector as drawn in step 2.        Given and , graph using the Triangle rule.   The Triangle Rule for adding the vector v with coordinates x = 1, y = 1 and u with coordinates x = 1, y = -2: v is drawn from the origin, u is drawn from the tip of v, and the sum v+u is drawn from the origin to the tip of u.      Following the Triangle Rule, we first draw in standard position, ending at . Starting at that endpoint we draw , which takes us 1 unit right and 2 units down, ending at . Finally we draw the vector starting at and ending at , which is the sum   in agreement with adding the vectors component-wise, as the graph above shows.    In order to graph using the Triangle Rule, draw it as . We define the meaning of next.   Multiplying a Vector by a Scalar (Number)  To multiply a vector by a scalar (number) , you multiply the and components of by .  The result of multiplying a vector by a scalar is again a vector denoted by .     Given the vector , compute:  (a)   (b)     Multiplying each component of by 4:     Multiplying each component of by :      There is a geometric interpretation for multiplying a vector by a number :  (a) If , you stretch to a length of .  (b) If , you compress to a length of .  (c) If , you flip the direction of .  (d) You can combine (c) with (a) and (b) to flip and stretch\/compress at the same time.     Graph the vectors in example 1.7 by first graphing and then using the above note.       We first graph , which has length . For : since , we stretch to a length of keeping its direction, ending at . For : combining (c) with (b) in the note above, we flip the direction of and compress it to a length of , ending at . Both graphs are shown in the figures below.    The vector v with coordinates x = -1,y = 1 and the scaled vector 4v with coordinates x = -4, y = 4.    The vector v with coordinates x = -1,y = 1 and the scaled vector - 0.5v with coordinates x = 0.5, y = -0.5.       Unit and Parallel Vectors   A vector of length 1 is called a unit vector.  Given a nonzero vector , the vector     is a unit vector with the same direction as .     Two vectors and are parallel if they lie on the same line.      Find a unit vector in the direction of .   Find all vectors of length 3 parallel to the vector .     The magnitude of is , so a unit vector in the direction of is   Indeed, .    A vector of length 3 parallel to must point either in the direction of or in the direction opposite of , so we scale the unit vector from the first part by and by :   These are the only two such vectors.     Components of a Vector   Given a vector , we have the formulas     where is the angle giving the direction of .      Given a vector , draw a picture summarizing the information in the definition above.   A vector v with coordinates x =v1, y= v2 in standard position with the angle theta from the positive x-axis, showing v1 = magnitude of v times cos(theta) as the horizontal component and v2 = magnitude of v times sin(theta) as the vertical component.      You can represent a force by using a vector. In this context, the length of the vector is the magnitude of the force.    Openstax, Calculus Volume 3, Section 2.1, Question 49   Two forces, a horizontal force of 45 lb and another of 52 lb, act on the same object. The angle between these forces is . Find the magnitude and direction angle from the positive x-axis of the resultant force that acts on the object. (Round to two decimal places.)     We place the horizontal 45 lb force along the positive -axis, so that . The 52 lb force then makes an angle of with the positive -axis, so using the component formulas:   The resultant force is the sum of the two forces:   Its magnitude is   Since both components of are positive, the resultant lies in the first quadrant, so its direction angle from the positive -axis satisfies      The net force acting on an object is the sum of all individual forces acting on it.    Openstax, Calculus Volume 3, Section 2.1, Question 57   A 1500-lb boat is parked on a ramp that makes an angle of with the horizontal. The boat's weight vector points downward and is a sum of two vectors: a vector that is parallel to the ramp and a vector that is perpendicular to the inclined surface. The magnitudes of vectors and are the components of the boat's weight vector parallel and perpendicular to the ramp, respectively. Find the magnitudes of and . (Round to the nearest integer.)   A boat on a ramp inclined at 30 degrees, with the weight vector pointing downward decomposed into v1 parallel to the ramp and v2 perpendicular to the ramp.  Openstax, Calculus Volume 3, Section 2.1, Question 57      The weight vector points straight down and has magnitude lb. Since the ramp makes an angle of with the horizontal, the direction perpendicular to the ramp makes that same angle of with the vertical; that is, the angle between and is , as in the picture above. Decomposing into these two perpendicular components:   As a check, , the magnitude of the weight vector.    "
},
{
  "id": "sec-ch01-01-Vectors2DIntroduction-2",
  "level": "2",
  "url": "sec-ch01-01-Vectors2DIntroduction.html#sec-ch01-01-Vectors2DIntroduction-2",
  "type": "Definition",
  "number": "1.1.1",
  "title": "Vectors.",
  "body": " Vectors   A vector is an object defined by     its magnitude (length)    and its direction.     They are geometrically represented by rays\/arrows and symbolically with a lowercase letter with an arrow above it or in bold face (such as or or , etc.).   "
},
{
  "id": "sec-ch01-01-Vectors2DIntroduction-5",
  "level": "2",
  "url": "sec-ch01-01-Vectors2DIntroduction.html#sec-ch01-01-Vectors2DIntroduction-5",
  "type": "Example",
  "number": "1.1.2",
  "title": "",
  "body": "  Draw the vectors below with given starting and ending points:  (a) and   (b) and    Two vectors drawn in the xy-plane: PQ from (0,0) to (3,2) and RS from (0.5,2) to (3.5,4).   What can we say about the vectors and ?     Moving from to we travel 3 units in the direction and 2 units in the direction. Moving from to we travel units in the direction and units in the direction. Since the two arrows describe the same displacement, they have the same magnitude and the same direction; the only difference between them is where they start.   "
},
{
  "id": "sec-ch01-01-Vectors2DIntroduction-6",
  "level": "2",
  "url": "sec-ch01-01-Vectors2DIntroduction.html#sec-ch01-01-Vectors2DIntroduction-6",
  "type": "Remark",
  "number": "1.1.3",
  "title": "Equivalent Vectors.",
  "body": " Equivalent Vectors  Vectors are said to be equivalent vectors if they have the same magnitude and direction (independent of their starting and ending points).  "
},
{
  "id": "sec-ch01-01-Vectors2DIntroduction-7",
  "level": "2",
  "url": "sec-ch01-01-Vectors2DIntroduction.html#sec-ch01-01-Vectors2DIntroduction-7",
  "type": "Definition",
  "number": "1.1.4",
  "title": "Vectors in Standard Position.",
  "body": " Vectors in Standard Position   If the starting point of a vector is the origin (the point ), we say the vector is in standard position.  Given a vector in standard position, if its ending point is ( ), we write down the vector as     and we say that is the -component of and is the -component of .   "
},
{
  "id": "sec-ch01-01-Vectors2DIntroduction-8",
  "level": "2",
  "url": "sec-ch01-01-Vectors2DIntroduction.html#sec-ch01-01-Vectors2DIntroduction-8",
  "type": "Remark",
  "number": "1.1.5",
  "title": "",
  "body": " [Writing a Vector in Standard Position]  Suppose a vector has starting point and ending point . The ending point of , in standard position, is .  In other words,     Writing a vector in standard position simply shifts the vector so that its starting point is the origin.  "
},
{
  "id": "sec-ch01-01-Vectors2DIntroduction-9",
  "level": "2",
  "url": "sec-ch01-01-Vectors2DIntroduction.html#sec-ch01-01-Vectors2DIntroduction-9",
  "type": "Example",
  "number": "1.1.6",
  "title": "",
  "body": "  Graph the vector with starting point and ending point ; write the vector in standard position; and then graph the vector in standard position.   A vector from P(2,1) to Q(-1,0) and the same vector in standard position from (0,0) to (-3,-1).      Both graphs are shown above. Using the formula, the ending point of the vector in standard position is , so   This is the arrow starting at the origin and ending at : the original vector shifted so that its starting point is the origin.   "
},
{
  "id": "sec-ch01-01-Vectors2DIntroduction-10",
  "level": "2",
  "url": "sec-ch01-01-Vectors2DIntroduction.html#sec-ch01-01-Vectors2DIntroduction-10",
  "type": "Definition",
  "number": "1.1.7",
  "title": "Magnitude of a Vector.",
  "body": " Magnitude of a Vector   To find the magnitude\/length of a vector:     Put the vector in standard position.    If the vector is given by , then its magnitude, denoted by |v|, is given by         "
},
{
  "id": "sec-ch01-01-Vectors2DIntroduction-11",
  "level": "2",
  "url": "sec-ch01-01-Vectors2DIntroduction.html#sec-ch01-01-Vectors2DIntroduction-11",
  "type": "Example",
  "number": "1.1.8",
  "title": "",
  "body": "  Find the length of the vector with starting point and ending point . Graph this vector (in standard position) and verify that the formula for length is the Pythagorean Theorem.   The vector from P(1,-2) to Q(4,2). In standard position, forms a right triangle with legs 3 and 4 and hypotenuse 5.      In standard position the vector is   so its length is   As the graph above shows, in standard position the vector is the hypotenuse of a right triangle whose horizontal leg has length 3 (the -component) and whose vertical leg has length 4 (the -component). The magnitude formula squares the two legs, adds them, and takes the square root, which is exactly the Pythagorean Theorem: .   "
},
{
  "id": "sec-ch01-01-Vectors2DIntroduction-12",
  "level": "2",
  "url": "sec-ch01-01-Vectors2DIntroduction.html#sec-ch01-01-Vectors2DIntroduction-12",
  "type": "Definition",
  "number": "1.1.9",
  "title": "Direction of a Vector.",
  "body": " Direction of a Vector   To find the direction of a vector:     Put the vector in standard position.    If the vector is given by , its direction is the angle starting on the positive x -axis and measured counter-clockwise ending on the vector .      "
},
{
  "id": "sec-ch01-01-Vectors2DIntroduction-13",
  "level": "2",
  "url": "sec-ch01-01-Vectors2DIntroduction.html#sec-ch01-01-Vectors2DIntroduction-13",
  "type": "Example",
  "number": "1.1.10",
  "title": "",
  "body": "  Find the direction of .   The vector v = (-2,-4) in standard position in the third quadrant, with the angle theta measured counter-clockwise from the positive x-axis. The angle phi is the portion of theta past the negative x-axis.      Both components of are negative, so the vector lies in the third quadrant and its direction angle satisfies . The angle that makes with the negative -axis satisfies   Hence, measuring counter-clockwise from the positive -axis,    "
},
{
  "id": "sec-ch01-01-Vectors2DIntroduction-14",
  "level": "2",
  "url": "sec-ch01-01-Vectors2DIntroduction.html#sec-ch01-01-Vectors2DIntroduction-14",
  "type": "Remark",
  "number": "1.1.11",
  "title": "",
  "body": " The zero vector is the only vector with zero magnitude and no direction.  "
},
{
  "id": "sec-ch01-01-Vectors2DIntroduction-15",
  "level": "2",
  "url": "sec-ch01-01-Vectors2DIntroduction.html#sec-ch01-01-Vectors2DIntroduction-15",
  "type": "Note",
  "number": "1.1.12",
  "title": "",
  "body": " From now on, any time a vector is mentioned, assume it is in standard position (unless stated otherwise).  "
},
{
  "id": "sec-ch01-01-Vectors2DIntroduction-16",
  "level": "2",
  "url": "sec-ch01-01-Vectors2DIntroduction.html#sec-ch01-01-Vectors2DIntroduction-16",
  "type": "Remark",
  "number": "1.1.13",
  "title": "",
  "body": " [Adding and Subtracting Vectors]  To add\/subtract two vectors and , you add\/subtract the corresponding and components.   The result of adding\/subtracting two vectors is again a vector.    Important: Vector subtraction is not commutative. Hence, (unless ).  "
},
{
  "id": "sec-ch01-01-Vectors2DIntroduction-17",
  "level": "2",
  "url": "sec-ch01-01-Vectors2DIntroduction.html#sec-ch01-01-Vectors2DIntroduction-17",
  "type": "Example",
  "number": "1.1.14",
  "title": "",
  "body": "  Compute and where and .     Adding and subtracting the corresponding components:   Note that both results are again vectors, and that computing instead would give a different (opposite) vector.   "
},
{
  "id": "sec-ch01-01-Vectors2DIntroduction-18",
  "level": "2",
  "url": "sec-ch01-01-Vectors2DIntroduction.html#sec-ch01-01-Vectors2DIntroduction-18",
  "type": "Note",
  "number": "1.1.15",
  "title": "",
  "body": " There is a geometric interpretation for vector addition\/subtraction. We can see it using the Triangle Rule.  The Triangle Rule states that in order to compute :     Draw in standard position.    Starting at the endpoint of , draw the vector .    Draw a vector starting at and ending at the end of the vector as drawn in step 2.     "
},
{
  "id": "sec-ch01-01-Vectors2DIntroduction-19",
  "level": "2",
  "url": "sec-ch01-01-Vectors2DIntroduction.html#sec-ch01-01-Vectors2DIntroduction-19",
  "type": "Example",
  "number": "1.1.16",
  "title": "",
  "body": "  Given and , graph using the Triangle rule.   The Triangle Rule for adding the vector v with coordinates x = 1, y = 1 and u with coordinates x = 1, y = -2: v is drawn from the origin, u is drawn from the tip of v, and the sum v+u is drawn from the origin to the tip of u.      Following the Triangle Rule, we first draw in standard position, ending at . Starting at that endpoint we draw , which takes us 1 unit right and 2 units down, ending at . Finally we draw the vector starting at and ending at , which is the sum   in agreement with adding the vectors component-wise, as the graph above shows.   "
},
{
  "id": "sec-ch01-01-Vectors2DIntroduction-21",
  "level": "2",
  "url": "sec-ch01-01-Vectors2DIntroduction.html#sec-ch01-01-Vectors2DIntroduction-21",
  "type": "Remark",
  "number": "1.1.17",
  "title": "Multiplying a Vector by a Scalar (Number).",
  "body": " Multiplying a Vector by a Scalar (Number)  To multiply a vector by a scalar (number) , you multiply the and components of by .  The result of multiplying a vector by a scalar is again a vector denoted by .  "
},
{
  "id": "sec-ch01-01-Vectors2DIntroduction-22",
  "level": "2",
  "url": "sec-ch01-01-Vectors2DIntroduction.html#sec-ch01-01-Vectors2DIntroduction-22",
  "type": "Example",
  "number": "1.1.18",
  "title": "",
  "body": "  Given the vector , compute:  (a)   (b)     Multiplying each component of by 4:     Multiplying each component of by :    "
},
{
  "id": "sec-ch01-01-Vectors2DIntroduction-23",
  "level": "2",
  "url": "sec-ch01-01-Vectors2DIntroduction.html#sec-ch01-01-Vectors2DIntroduction-23",
  "type": "Note",
  "number": "1.1.19",
  "title": "",
  "body": " There is a geometric interpretation for multiplying a vector by a number :  (a) If , you stretch to a length of .  (b) If , you compress to a length of .  (c) If , you flip the direction of .  (d) You can combine (c) with (a) and (b) to flip and stretch\/compress at the same time.  "
},
{
  "id": "sec-ch01-01-Vectors2DIntroduction-24",
  "level": "2",
  "url": "sec-ch01-01-Vectors2DIntroduction.html#sec-ch01-01-Vectors2DIntroduction-24",
  "type": "Example",
  "number": "1.1.20",
  "title": "",
  "body": "  Graph the vectors in example 1.7 by first graphing and then using the above note.       We first graph , which has length . For : since , we stretch to a length of keeping its direction, ending at . For : combining (c) with (b) in the note above, we flip the direction of and compress it to a length of , ending at . Both graphs are shown in the figures below.    The vector v with coordinates x = -1,y = 1 and the scaled vector 4v with coordinates x = -4, y = 4.    The vector v with coordinates x = -1,y = 1 and the scaled vector - 0.5v with coordinates x = 0.5, y = -0.5.     "
},
{
  "id": "sec-ch01-01-Vectors2DIntroduction-25",
  "level": "2",
  "url": "sec-ch01-01-Vectors2DIntroduction.html#sec-ch01-01-Vectors2DIntroduction-25",
  "type": "Definition",
  "number": "1.1.21",
  "title": "Unit and Parallel Vectors.",
  "body": " Unit and Parallel Vectors   A vector of length 1 is called a unit vector.  Given a nonzero vector , the vector     is a unit vector with the same direction as .     Two vectors and are parallel if they lie on the same line.   "
},
{
  "id": "sec-ch01-01-Vectors2DIntroduction-26",
  "level": "2",
  "url": "sec-ch01-01-Vectors2DIntroduction.html#sec-ch01-01-Vectors2DIntroduction-26",
  "type": "Example",
  "number": "1.1.22",
  "title": "",
  "body": "  Find a unit vector in the direction of .   Find all vectors of length 3 parallel to the vector .     The magnitude of is , so a unit vector in the direction of is   Indeed, .    A vector of length 3 parallel to must point either in the direction of or in the direction opposite of , so we scale the unit vector from the first part by and by :   These are the only two such vectors.   "
},
{
  "id": "sec-ch01-01-Vectors2DIntroduction-27",
  "level": "2",
  "url": "sec-ch01-01-Vectors2DIntroduction.html#sec-ch01-01-Vectors2DIntroduction-27",
  "type": "Definition",
  "number": "1.1.23",
  "title": "Components of a Vector.",
  "body": " Components of a Vector   Given a vector , we have the formulas     where is the angle giving the direction of .   "
},
{
  "id": "sec-ch01-01-Vectors2DIntroduction-28",
  "level": "2",
  "url": "sec-ch01-01-Vectors2DIntroduction.html#sec-ch01-01-Vectors2DIntroduction-28",
  "type": "Example",
  "number": "1.1.24",
  "title": "",
  "body": "  Given a vector , draw a picture summarizing the information in the definition above.   A vector v with coordinates x =v1, y= v2 in standard position with the angle theta from the positive x-axis, showing v1 = magnitude of v times cos(theta) as the horizontal component and v2 = magnitude of v times sin(theta) as the vertical component.    "
},
{
  "id": "sec-ch01-01-Vectors2DIntroduction-29",
  "level": "2",
  "url": "sec-ch01-01-Vectors2DIntroduction.html#sec-ch01-01-Vectors2DIntroduction-29",
  "type": "Note",
  "number": "1.1.25",
  "title": "",
  "body": " You can represent a force by using a vector. In this context, the length of the vector is the magnitude of the force.  "
},
{
  "id": "sec-ch01-01-Vectors2DIntroduction-30",
  "level": "2",
  "url": "sec-ch01-01-Vectors2DIntroduction.html#sec-ch01-01-Vectors2DIntroduction-30",
  "type": "Example",
  "number": "1.1.26",
  "title": "Openstax, Calculus Volume 3, Section 2.1, Question 49.",
  "body": " Openstax, Calculus Volume 3, Section 2.1, Question 49   Two forces, a horizontal force of 45 lb and another of 52 lb, act on the same object. The angle between these forces is . Find the magnitude and direction angle from the positive x-axis of the resultant force that acts on the object. (Round to two decimal places.)     We place the horizontal 45 lb force along the positive -axis, so that . The 52 lb force then makes an angle of with the positive -axis, so using the component formulas:   The resultant force is the sum of the two forces:   Its magnitude is   Since both components of are positive, the resultant lies in the first quadrant, so its direction angle from the positive -axis satisfies    "
},
{
  "id": "sec-ch01-01-Vectors2DIntroduction-31",
  "level": "2",
  "url": "sec-ch01-01-Vectors2DIntroduction.html#sec-ch01-01-Vectors2DIntroduction-31",
  "type": "Remark",
  "number": "1.1.27",
  "title": "",
  "body": " The net force acting on an object is the sum of all individual forces acting on it.  "
},
{
  "id": "sec-ch01-01-Vectors2DIntroduction-32",
  "level": "2",
  "url": "sec-ch01-01-Vectors2DIntroduction.html#sec-ch01-01-Vectors2DIntroduction-32",
  "type": "Example",
  "number": "1.1.28",
  "title": "Openstax, Calculus Volume 3, Section 2.1, Question 57.",
  "body": " Openstax, Calculus Volume 3, Section 2.1, Question 57   A 1500-lb boat is parked on a ramp that makes an angle of with the horizontal. The boat's weight vector points downward and is a sum of two vectors: a vector that is parallel to the ramp and a vector that is perpendicular to the inclined surface. The magnitudes of vectors and are the components of the boat's weight vector parallel and perpendicular to the ramp, respectively. Find the magnitudes of and . (Round to the nearest integer.)   A boat on a ramp inclined at 30 degrees, with the weight vector pointing downward decomposed into v1 parallel to the ramp and v2 perpendicular to the ramp.  Openstax, Calculus Volume 3, Section 2.1, Question 57      The weight vector points straight down and has magnitude lb. Since the ramp makes an angle of with the horizontal, the direction perpendicular to the ramp makes that same angle of with the vertical; that is, the angle between and is , as in the picture above. Decomposing into these two perpendicular components:   As a check, , the magnitude of the weight vector.   "
},
{
  "id": "backmatter-2",
  "level": "1",
  "url": "backmatter-2.html",
  "type": "Colophon",
  "number": "",
  "title": "Colophon",
  "body": " This book was authored in PreTeXt .  "
}
]

var ptx_lunr_idx = lunr(function () {
  this.ref('id')
  this.field('title')
  this.field('body')
  this.metadataWhitelist = ['position']

  ptx_lunr_docs.forEach(function (doc) {
    this.add(doc)
  }, this)
})
