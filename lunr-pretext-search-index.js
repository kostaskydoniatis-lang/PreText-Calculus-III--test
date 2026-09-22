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
  "body": " Vectors in 2D   Vectors   A vector is an object defined by     its magnitude (length)    and its direction.     They are geometrically represented by rays\/arrows and symbolically with a lowercase letter with an arrow above it or in bold face (such as or or , etc.).    We will be drawing 2D vectors in the -plane (Cartesian plane). In this setting, we can define a vector by stating its starting point (arrow tail) and ending point (arrow head).  When a vector is given by its starting point and ending point , we can represent the vector symbolically using .    Draw the vectors below with given starting and ending points:  (a) and   (b) and   What can we say about the vectors and ?     Two vectors drawn in the -plane: with initial point and terminal point , and vector with initial point and terminal point .    Moving from to we travel 3 units in the direction and 2 units in the direction. Moving from to we travel units in the direction and units in the direction. Since the two arrows describe the same displacement, they have the same magnitude and the same direction; the only difference between them is where they start.     Equivalent Vectors  Vectors are said to be equivalent vectors if they have the same magnitude and direction (independent of their starting and ending points).    Vectors in Standard Position   If the starting point of a vector is the origin (the point ), we say the vector is in standard position.  Given a vector in standard position, if its ending point is ( ), we write down the vector as     and we say that is the -component of and is the -component of .     Writing a Vector in Standard Position  Suppose a vector has starting point and ending point . The ending point of , in standard position, is .  In other words,     Writing a vector in standard position simply shifts the vector so that its starting point is the origin.     Graph the vector with starting point and ending point ; write the vector in standard position; and then graph the vector in standard position.     A vector from to and the same vector in standard position, namely .    Both graphs are shown above. Using the formula, the ending point of the vector in standard position is , so   This is the arrow starting at the origin and ending at : the original vector shifted so that its starting point is the origin.     Magnitude of a Vector   To find the magnitude\/length of a vector:     Put the vector in standard position.    If the vector is given by , then its magnitude, denoted by |v|, is given by      .      Find the length of the vector with starting point and ending point . Graph this vector (in standard position) and verify that the formula for length is the Pythagorean Theorem.     The vector from to (the vector with coordinates ), in standard position, forming a right triangle with legs 3 and 4 and hypotenuse 5.    In standard position the vector is   so its length is   As the graph above shows, in standard position the vector is the hypotenuse of a right triangle whose horizontal leg has length 3 (the -component) and whose vertical leg has length 4 (the -component). The magnitude formula squares the two legs, adds them, and takes the square root, which is exactly the Pythagorean Theorem: .     Direction of a Vector   To find the direction of a vector:     Put the vector in standard position.    If the vector is given by , its direction is the angle starting on the positive x -axis and measured counter-clockwise ending on the vector .         Find the direction of .     The vector , in standard position in the third quadrant, with the angle measured counter-clockwise from the positive -axis. The angle is the portion of past the negative -axis.    Both components of are negative, so the vector lies in the third quadrant and its direction angle satisfies . The angle that makes with the negative -axis satisfies   Hence, measuring counter-clockwise from the positive -axis,      The zero vector is the only vector with zero magnitude and no direction.     From now on, any time a vector is mentioned, assume it is in standard position (unless stated otherwise).    [Adding and Subtracting Vectors]  To add\/subtract two vectors and , you add\/subtract the corresponding and components.   The result of adding\/subtracting two vectors is again a vector.  Important: Vector subtraction is not commutative. Hence, (unless ).     Compute and where and .    Adding and subtracting the corresponding components:   Note that both results are again vectors, and that computing instead would give a different (opposite) vector.     There is a geometric interpretation for vector addition\/subtraction. We can see it using the Triangle Rule.  The Triangle Rule states that in order to compute :     Draw in standard position.    Starting at the endpoint of , draw the vector .    Draw a vector starting at and ending at the end of the vector as drawn in step 2.           Vector Addition   An animation that slides vector u from the origin to the tip of vector v, showing the sum u plus v.      Given and , graph using the Triangle rule.   The Triangle Rule for adding vector and vector : is drawn from the origin, is drawn from the tip of , and the sum is drawn from the origin to the tip of .      Following the Triangle Rule, we first draw in standard position, ending at . Starting at that endpoint we draw , which takes us 1 unit right and 2 units down, ending at . Finally we draw the vector starting at and ending at , which is the sum   in agreement with adding the vectors component-wise, as the graph above shows.    In order to graph using the Triangle Rule, draw it as . We define the meaning of next.   Multiplying a Vector by a Scalar (Number)  To multiply a vector by a scalar (number) , you multiply the and components of by .  The result of multiplying a vector by a scalar is again a vector denoted by .     Given the vector , compute:  (a)   (b)     Multiplying each component of by 4:     Multiplying each component of by :      There is a geometric interpretation for multiplying a vector by a number :  (a) If , you stretch to a length of .  (b) If , you compress to a length of .  (c) If , you flip the direction of .  (d) You can combine (c) with (a) and (b) to flip and stretch\/compress at the same time.    Vector Multiplication   An animation that illustrates the geometric interpretation of multiplying a vector u by a scalar c, showing how the vector is stretched, compressed, or flipped depending on the value of c.      Graph the vectors in by first graphing and then using the above note.      We first graph , which has length . For : since , we stretch to a length of keeping its direction, ending at . For : combining (c) with (b) in the note above, we flip the direction of and compress it to a length of , ending at . Both graphs are shown in the figures below.   The graph of the two vectors and along with the original vector .    The vector with coordinates , and the scaled vector with coordinates .     The vector with coordinates , and the scaled vector with coordinates .      You can minimize the side bar by clicking on the arrow icon. You can save a copy and create your own version of the graph by clicking on the \"Save\" button in the upper right corner of the graph. You can open in a new page from here: link to the left graph , link to the right graph      Unit and Parallel Vectors   A vector of length 1 is called a unit vector.  Given a nonzero vector , the vector     is a unit vector with the same direction as .  Two vectors and are parallel if they lie on the same line.      Find a unit vector in the direction of .  Find all vectors of length 3 parallel to the vector .    The magnitude of is , so a unit vector in the direction of is   Indeed, .    A vector of length 3 parallel to must point either in the direction of or in the direction opposite of , so we scale the unit vector from the first part by and by :   These are the only two such vectors.     Components of a Vector   Given a vector , we have the formulas   ,  where is the angle giving the direction of .      Given a vector , draw a picture summarizing the information in the definition above.   A vector , in standard position with the angle from the positive -axis, showing as the horizontal component and as the vertical component.       You can represent a force by using a vector. In this context, the length of the vector is the magnitude of the force.    Openstax, Calculus Volume 3, Section 2.1, Question 49   Two forces, a horizontal force of 45 lb and another of 52 lb, act on the same object. The angle between these forces is . Find the magnitude and direction angle from the positive x-axis of the resultant force that acts on the object. (Round to two decimal places.)    We place the horizontal 45 lb force along the positive -axis, so that . The 52 lb force then makes an angle of with the positive -axis, so using the component formulas:   The resultant force is the sum of the two forces:   Its magnitude is   Since both components of are positive, the resultant lies in the first quadrant, so its direction angle from the positive -axis satisfies      The net force acting on an object is the sum of all individual forces acting on it.    Openstax, Calculus Volume 3, Section 2.1, Question 57   A 1500-lb boat is parked on a ramp that makes an angle of with the horizontal. The boat's weight vector points downward and is a sum of two vectors: a vector that is parallel to the ramp and a vector that is perpendicular to the inclined surface. The magnitudes of vectors and are the components of the boat's weight vector parallel and perpendicular to the ramp, respectively. Find the magnitudes of and . (Round to the nearest integer.)   A boat on a ramp inclined at 30 degrees, with the weight vector pointing downward decomposed into v 1 parallel to the ramp and v 2 perpendicular to the ramp.   A boat on a ramp inclined at , with the weight vector pointing downward decomposed into parallel to the ramp and perpendicular to the ramp.      The weight vector points straight down and has magnitude lb. Since the ramp makes an angle of with the horizontal, the direction perpendicular to the ramp makes that same angle of with the vertical; that is, the angle between and is , as in the picture above. Decomposing into these two perpendicular components:   As a check, , the magnitude of the weight vector.    "
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
  "id": "example-ch01-01-ex-1-1",
  "level": "2",
  "url": "sec-ch01-01-Vectors2DIntroduction.html#example-ch01-01-ex-1-1",
  "type": "Example",
  "number": "1.1.2",
  "title": "",
  "body": "  Draw the vectors below with given starting and ending points:  (a) and   (b) and   What can we say about the vectors and ?     Two vectors drawn in the -plane: with initial point and terminal point , and vector with initial point and terminal point .    Moving from to we travel 3 units in the direction and 2 units in the direction. Moving from to we travel units in the direction and units in the direction. Since the two arrows describe the same displacement, they have the same magnitude and the same direction; the only difference between them is where they start.   "
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
  "title": "Writing a Vector in Standard Position.",
  "body": " Writing a Vector in Standard Position  Suppose a vector has starting point and ending point . The ending point of , in standard position, is .  In other words,     Writing a vector in standard position simply shifts the vector so that its starting point is the origin.  "
},
{
  "id": "example-ch01-01-ex-1-2",
  "level": "2",
  "url": "sec-ch01-01-Vectors2DIntroduction.html#example-ch01-01-ex-1-2",
  "type": "Example",
  "number": "1.1.6",
  "title": "",
  "body": "  Graph the vector with starting point and ending point ; write the vector in standard position; and then graph the vector in standard position.     A vector from to and the same vector in standard position, namely .    Both graphs are shown above. Using the formula, the ending point of the vector in standard position is , so   This is the arrow starting at the origin and ending at : the original vector shifted so that its starting point is the origin.   "
},
{
  "id": "sec-ch01-01-Vectors2DIntroduction-10",
  "level": "2",
  "url": "sec-ch01-01-Vectors2DIntroduction.html#sec-ch01-01-Vectors2DIntroduction-10",
  "type": "Definition",
  "number": "1.1.7",
  "title": "Magnitude of a Vector.",
  "body": " Magnitude of a Vector   To find the magnitude\/length of a vector:     Put the vector in standard position.    If the vector is given by , then its magnitude, denoted by |v|, is given by      .   "
},
{
  "id": "example-ch01-01-ex-1-3",
  "level": "2",
  "url": "sec-ch01-01-Vectors2DIntroduction.html#example-ch01-01-ex-1-3",
  "type": "Example",
  "number": "1.1.8",
  "title": "",
  "body": "  Find the length of the vector with starting point and ending point . Graph this vector (in standard position) and verify that the formula for length is the Pythagorean Theorem.     The vector from to (the vector with coordinates ), in standard position, forming a right triangle with legs 3 and 4 and hypotenuse 5.    In standard position the vector is   so its length is   As the graph above shows, in standard position the vector is the hypotenuse of a right triangle whose horizontal leg has length 3 (the -component) and whose vertical leg has length 4 (the -component). The magnitude formula squares the two legs, adds them, and takes the square root, which is exactly the Pythagorean Theorem: .   "
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
  "id": "example-ch01-01-ex-1-4",
  "level": "2",
  "url": "sec-ch01-01-Vectors2DIntroduction.html#example-ch01-01-ex-1-4",
  "type": "Example",
  "number": "1.1.10",
  "title": "",
  "body": "  Find the direction of .     The vector , in standard position in the third quadrant, with the angle measured counter-clockwise from the positive -axis. The angle is the portion of past the negative -axis.    Both components of are negative, so the vector lies in the third quadrant and its direction angle satisfies . The angle that makes with the negative -axis satisfies   Hence, measuring counter-clockwise from the positive -axis,    "
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
  "title": "[Adding and Subtracting Vectors].",
  "body": " [Adding and Subtracting Vectors]  To add\/subtract two vectors and , you add\/subtract the corresponding and components.   The result of adding\/subtracting two vectors is again a vector.  Important: Vector subtraction is not commutative. Hence, (unless ).  "
},
{
  "id": "example-ch01-01-ex-1-5",
  "level": "2",
  "url": "sec-ch01-01-Vectors2DIntroduction.html#example-ch01-01-ex-1-5",
  "type": "Example",
  "number": "1.1.14",
  "title": "",
  "body": "  Compute and where and .    Adding and subtracting the corresponding components:   Note that both results are again vectors, and that computing instead would give a different (opposite) vector.   "
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
  "id": "Vector-Addition-Animation-Web",
  "level": "2",
  "url": "sec-ch01-01-Vectors2DIntroduction.html#Vector-Addition-Animation-Web",
  "type": "Figure",
  "number": "1.1.5",
  "title": "",
  "body": " Vector Addition   An animation that slides vector u from the origin to the tip of vector v, showing the sum u plus v.   "
},
{
  "id": "example-ch01-01-ex-1-6",
  "level": "2",
  "url": "sec-ch01-01-Vectors2DIntroduction.html#example-ch01-01-ex-1-6",
  "type": "Example",
  "number": "1.1.16",
  "title": "",
  "body": "  Given and , graph using the Triangle rule.   The Triangle Rule for adding vector and vector : is drawn from the origin, is drawn from the tip of , and the sum is drawn from the origin to the tip of .      Following the Triangle Rule, we first draw in standard position, ending at . Starting at that endpoint we draw , which takes us 1 unit right and 2 units down, ending at . Finally we draw the vector starting at and ending at , which is the sum   in agreement with adding the vectors component-wise, as the graph above shows.   "
},
{
  "id": "sec-ch01-01-Vectors2DIntroduction-22",
  "level": "2",
  "url": "sec-ch01-01-Vectors2DIntroduction.html#sec-ch01-01-Vectors2DIntroduction-22",
  "type": "Remark",
  "number": "1.1.17",
  "title": "Multiplying a Vector by a Scalar (Number).",
  "body": " Multiplying a Vector by a Scalar (Number)  To multiply a vector by a scalar (number) , you multiply the and components of by .  The result of multiplying a vector by a scalar is again a vector denoted by .  "
},
{
  "id": "example-ch01-01-ex-1-7",
  "level": "2",
  "url": "sec-ch01-01-Vectors2DIntroduction.html#example-ch01-01-ex-1-7",
  "type": "Example",
  "number": "1.1.18",
  "title": "",
  "body": "  Given the vector , compute:  (a)   (b)     Multiplying each component of by 4:     Multiplying each component of by :    "
},
{
  "id": "sec-ch01-01-Vectors2DIntroduction-24",
  "level": "2",
  "url": "sec-ch01-01-Vectors2DIntroduction.html#sec-ch01-01-Vectors2DIntroduction-24",
  "type": "Note",
  "number": "1.1.19",
  "title": "",
  "body": " There is a geometric interpretation for multiplying a vector by a number :  (a) If , you stretch to a length of .  (b) If , you compress to a length of .  (c) If , you flip the direction of .  (d) You can combine (c) with (a) and (b) to flip and stretch\/compress at the same time.  "
},
{
  "id": "Vector-Multiplication-Animation-Web",
  "level": "2",
  "url": "sec-ch01-01-Vectors2DIntroduction.html#Vector-Multiplication-Animation-Web",
  "type": "Figure",
  "number": "1.1.7",
  "title": "",
  "body": " Vector Multiplication   An animation that illustrates the geometric interpretation of multiplying a vector u by a scalar c, showing how the vector is stretched, compressed, or flipped depending on the value of c.   "
},
{
  "id": "example-ch01-01-ex-1-8",
  "level": "2",
  "url": "sec-ch01-01-Vectors2DIntroduction.html#example-ch01-01-ex-1-8",
  "type": "Example",
  "number": "1.1.20",
  "title": "",
  "body": "  Graph the vectors in by first graphing and then using the above note.      We first graph , which has length . For : since , we stretch to a length of keeping its direction, ending at . For : combining (c) with (b) in the note above, we flip the direction of and compress it to a length of , ending at . Both graphs are shown in the figures below.   The graph of the two vectors and along with the original vector .    The vector with coordinates , and the scaled vector with coordinates .     The vector with coordinates , and the scaled vector with coordinates .      You can minimize the side bar by clicking on the arrow icon. You can save a copy and create your own version of the graph by clicking on the \"Save\" button in the upper right corner of the graph. You can open in a new page from here: link to the left graph , link to the right graph    "
},
{
  "id": "sec-ch01-01-Vectors2DIntroduction-27",
  "level": "2",
  "url": "sec-ch01-01-Vectors2DIntroduction.html#sec-ch01-01-Vectors2DIntroduction-27",
  "type": "Definition",
  "number": "1.1.21",
  "title": "Unit and Parallel Vectors.",
  "body": " Unit and Parallel Vectors   A vector of length 1 is called a unit vector.  Given a nonzero vector , the vector     is a unit vector with the same direction as .  Two vectors and are parallel if they lie on the same line.   "
},
{
  "id": "example-ch01-01-ex-1-9",
  "level": "2",
  "url": "sec-ch01-01-Vectors2DIntroduction.html#example-ch01-01-ex-1-9",
  "type": "Example",
  "number": "1.1.22",
  "title": "",
  "body": "  Find a unit vector in the direction of .  Find all vectors of length 3 parallel to the vector .    The magnitude of is , so a unit vector in the direction of is   Indeed, .    A vector of length 3 parallel to must point either in the direction of or in the direction opposite of , so we scale the unit vector from the first part by and by :   These are the only two such vectors.   "
},
{
  "id": "sec-ch01-01-Vectors2DIntroduction-29",
  "level": "2",
  "url": "sec-ch01-01-Vectors2DIntroduction.html#sec-ch01-01-Vectors2DIntroduction-29",
  "type": "Definition",
  "number": "1.1.23",
  "title": "Components of a Vector.",
  "body": " Components of a Vector   Given a vector , we have the formulas   ,  where is the angle giving the direction of .   "
},
{
  "id": "example-ch01-01-ex-1-10",
  "level": "2",
  "url": "sec-ch01-01-Vectors2DIntroduction.html#example-ch01-01-ex-1-10",
  "type": "Example",
  "number": "1.1.24",
  "title": "",
  "body": "  Given a vector , draw a picture summarizing the information in the definition above.   A vector , in standard position with the angle from the positive -axis, showing as the horizontal component and as the vertical component.     "
},
{
  "id": "sec-ch01-01-Vectors2DIntroduction-31",
  "level": "2",
  "url": "sec-ch01-01-Vectors2DIntroduction.html#sec-ch01-01-Vectors2DIntroduction-31",
  "type": "Note",
  "number": "1.1.25",
  "title": "",
  "body": " You can represent a force by using a vector. In this context, the length of the vector is the magnitude of the force.  "
},
{
  "id": "example-ch01-01-ex-1-11",
  "level": "2",
  "url": "sec-ch01-01-Vectors2DIntroduction.html#example-ch01-01-ex-1-11",
  "type": "Example",
  "number": "1.1.26",
  "title": "Openstax, Calculus Volume 3, Section 2.1, Question 49.",
  "body": " Openstax, Calculus Volume 3, Section 2.1, Question 49   Two forces, a horizontal force of 45 lb and another of 52 lb, act on the same object. The angle between these forces is . Find the magnitude and direction angle from the positive x-axis of the resultant force that acts on the object. (Round to two decimal places.)    We place the horizontal 45 lb force along the positive -axis, so that . The 52 lb force then makes an angle of with the positive -axis, so using the component formulas:   The resultant force is the sum of the two forces:   Its magnitude is   Since both components of are positive, the resultant lies in the first quadrant, so its direction angle from the positive -axis satisfies    "
},
{
  "id": "sec-ch01-01-Vectors2DIntroduction-33",
  "level": "2",
  "url": "sec-ch01-01-Vectors2DIntroduction.html#sec-ch01-01-Vectors2DIntroduction-33",
  "type": "Remark",
  "number": "1.1.27",
  "title": "",
  "body": " The net force acting on an object is the sum of all individual forces acting on it.  "
},
{
  "id": "example-ch01-01-ex-1-12",
  "level": "2",
  "url": "sec-ch01-01-Vectors2DIntroduction.html#example-ch01-01-ex-1-12",
  "type": "Example",
  "number": "1.1.28",
  "title": "Openstax, Calculus Volume 3, Section 2.1, Question 57.",
  "body": " Openstax, Calculus Volume 3, Section 2.1, Question 57   A 1500-lb boat is parked on a ramp that makes an angle of with the horizontal. The boat's weight vector points downward and is a sum of two vectors: a vector that is parallel to the ramp and a vector that is perpendicular to the inclined surface. The magnitudes of vectors and are the components of the boat's weight vector parallel and perpendicular to the ramp, respectively. Find the magnitudes of and . (Round to the nearest integer.)   A boat on a ramp inclined at 30 degrees, with the weight vector pointing downward decomposed into v 1 parallel to the ramp and v 2 perpendicular to the ramp.   A boat on a ramp inclined at , with the weight vector pointing downward decomposed into parallel to the ramp and perpendicular to the ramp.      The weight vector points straight down and has magnitude lb. Since the ramp makes an angle of with the horizontal, the direction perpendicular to the ramp makes that same angle of with the vertical; that is, the angle between and is , as in the picture above. Decomposing into these two perpendicular components:   As a check, , the magnitude of the weight vector.   "
},
{
  "id": "sec-ch01-02-VectorsIn3D",
  "level": "1",
  "url": "sec-ch01-02-VectorsIn3D.html",
  "type": "Section",
  "number": "1.2",
  "title": "Vectors in 3D",
  "body": " Vectors in 3D   Everything we did with vectors in the previous section transfers to vectors in 3D (almost identically). Hence, we will focus first on getting used to three dimensions.    -Coordinate System   The 3-dimensional coordinate system represented by the , , and axes is called the -coordinate system.  Other names for this coordinate system are:     Euclidean space    3-dimensional space (3D space)     -space     .        You can draw a 2D representation of 3D space as follows:   The three dimensional space with the axes x, y, and z.      For consistency, we will always draw the -space following the right-hand rule as shown below:   From OpenStax, Calculus Volume 3, Section 2.2    The xyz-coordinate system with axes arranged using the right-hand rule.   The -coordinate system with axes arranged using the right-hand rule.     The right-hand rule: a right hand, with the thumb pointing upwards, defining the z axis, while the rest of the fingers move from the x axis to the y axis.   The right-hand rule: a right hand, with the thumb pointing upwards, defining the axis, while the rest of the fingers move from the axis to the axis.        Points in -Space   In the -plane, we represent points by ordered pairs of the form . In -space, we represent points by ordered triples of the form .  Given a point , we call , , and the , , and coordinates of the point, respectively.     The point plotted in -space.      We have infinitely many planes. The main planes are:     The -plane: Consists of all points with -coordinate equal to zero. Defined by the equation . Contains the and axes.    The -plane: Consists of all points with -coordinate equal to zero. Defined by the equation . Contains the and axes.    The -plane: Consists of all points with -coordinate equal to zero. Defined by the equation . Contains the and axes.      From OpenStax, Calculus Volume 3, Section 2.2   The three coordinate planes xy, xz, and yz shown in xyz-space.   The three coordinate planes , , and shown in -space.          Sketch the plane parallel to the -plane through . Moreover, write an equation for this plane.    The -plane is defined by the equation , and any plane parallel to it consists of all points whose -coordinate is equal to one fixed constant. Since our plane must contain the point , that constant is 9, so the plane is defined by the equation   To sketch it, draw the -axes (following the right-hand rule), mark the value 9 on the -axis, and through that mark draw a copy of the -plane. The plane contains the point and, more generally, every point of the form .   The plane parallel to the x z-plane through the point (1,9,4).       Vectors in -Space   In the -plane, we represent vectors in standard position using the notation . In -space, we represent vectors in standard position using the notation .  If a vector is given by its starting point and ending point , we can shift it to standard position by using the formula .  A vector in standard position is also called a position vector.     The vector , drawn in standard position in -space.      Vector Operations in -Space  Vector operations in -space work exactly the same as in the -plane. We do operations coordinate-wise.  Let , , and be a real number (scalar). Then                .     Note: Geometrically, everything works the same. Adding\/subtracting vectors can be done using the Triangle Rule. Scaling a vector changes its length and potentially flips the direction of the vector. It is harder to draw now, though...     Given and , compute .    Working from the inside out, we first compute the vector coordinate-wise:   Its magnitude is   and hence .     Distance and Midpoint Formula   Given two points and in -space, we denote the line segment connecting and by . Moreover, we have that     The distance between the points and (the length of the line segment ) is given by     The midpoint on the line segment is given by      Note that the distance between and is simply .     From Briggs, et al., Calculus Early Transcendentals (3e), Figure 13.33   Two points P and Q in xyz-space connected by a line segment, illustrating the midpoint formula.   Two points and in -space connected by a line segment, illustrating the midpoint formula.      Magnitude  Given a 3D vector , then . As before, is a unit vector if .    Recall: Unit Vector in the Direction of  When working with a 3D vector , we can't define its direction by a single angle anymore (since is contained in infinitely many planes). Instead, we focus on the unit vector in the direction of .  Given a nonzero vector , the vector is a unit vector in the direction of .     Given , find:  (a) A unit vector in the direction of .  (b) All vectors of length 3 parallel to .    The magnitude of is , so a unit vector in the direction of is     A vector of length 3 parallel to points either in the direction of or in the direction opposite of , so the only two such vectors are      Coordinate Vectors   In -space, the following vectors are called coordinate vectors:      .     .     .     Given a vector , we can also write in the form .     Vector Addition   An animation that expresses a vector as the sum of its coordinate vectors.      Verify that .    Writing each scaled coordinate vector in component form and adding coordinate-wise:   as claimed.    "
},
{
  "id": "sec-ch01-02-VectorsIn3D-2",
  "level": "2",
  "url": "sec-ch01-02-VectorsIn3D.html#sec-ch01-02-VectorsIn3D-2",
  "type": "Note",
  "number": "1.2.1",
  "title": "",
  "body": " Everything we did with vectors in the previous section transfers to vectors in 3D (almost identically). Hence, we will focus first on getting used to three dimensions.  "
},
{
  "id": "sec-ch01-02-VectorsIn3D-3",
  "level": "2",
  "url": "sec-ch01-02-VectorsIn3D.html#sec-ch01-02-VectorsIn3D-3",
  "type": "Definition",
  "number": "1.2.2",
  "title": "<span class=\"process-math\">\\(xyz\\)<\/span>-Coordinate System.",
  "body": " -Coordinate System   The 3-dimensional coordinate system represented by the , , and axes is called the -coordinate system.  Other names for this coordinate system are:     Euclidean space    3-dimensional space (3D space)     -space     .      "
},
{
  "id": "sec-ch01-02-VectorsIn3D-4",
  "level": "2",
  "url": "sec-ch01-02-VectorsIn3D.html#sec-ch01-02-VectorsIn3D-4",
  "type": "Note",
  "number": "1.2.3",
  "title": "",
  "body": " You can draw a 2D representation of 3D space as follows:   The three dimensional space with the axes x, y, and z.    "
},
{
  "id": "sec-ch01-02-VectorsIn3D-5",
  "level": "2",
  "url": "sec-ch01-02-VectorsIn3D.html#sec-ch01-02-VectorsIn3D-5",
  "type": "Note",
  "number": "1.2.4",
  "title": "",
  "body": " For consistency, we will always draw the -space following the right-hand rule as shown below:   From OpenStax, Calculus Volume 3, Section 2.2    The xyz-coordinate system with axes arranged using the right-hand rule.   The -coordinate system with axes arranged using the right-hand rule.     The right-hand rule: a right hand, with the thumb pointing upwards, defining the z axis, while the rest of the fingers move from the x axis to the y axis.   The right-hand rule: a right hand, with the thumb pointing upwards, defining the axis, while the rest of the fingers move from the axis to the axis.      "
},
{
  "id": "sec-ch01-02-VectorsIn3D-6",
  "level": "2",
  "url": "sec-ch01-02-VectorsIn3D.html#sec-ch01-02-VectorsIn3D-6",
  "type": "Definition",
  "number": "1.2.5",
  "title": "Points in <span class=\"process-math\">\\(xyz\\)<\/span>-Space.",
  "body": " Points in -Space   In the -plane, we represent points by ordered pairs of the form . In -space, we represent points by ordered triples of the form .  Given a point , we call , , and the , , and coordinates of the point, respectively.   "
},
{
  "id": "fig-ch01-02-point-6-4-5-8",
  "level": "2",
  "url": "sec-ch01-02-VectorsIn3D.html#fig-ch01-02-point-6-4-5-8",
  "type": "Figure",
  "number": "1.2.3",
  "title": "",
  "body": " The point plotted in -space.    "
},
{
  "id": "sec-ch01-02-VectorsIn3D-8",
  "level": "2",
  "url": "sec-ch01-02-VectorsIn3D.html#sec-ch01-02-VectorsIn3D-8",
  "type": "Remark",
  "number": "1.2.6",
  "title": "",
  "body": " We have infinitely many planes. The main planes are:     The -plane: Consists of all points with -coordinate equal to zero. Defined by the equation . Contains the and axes.    The -plane: Consists of all points with -coordinate equal to zero. Defined by the equation . Contains the and axes.    The -plane: Consists of all points with -coordinate equal to zero. Defined by the equation . Contains the and axes.      From OpenStax, Calculus Volume 3, Section 2.2   The three coordinate planes xy, xz, and yz shown in xyz-space.   The three coordinate planes , , and shown in -space.     "
},
{
  "id": "example-ch01-02-ex-2-1",
  "level": "2",
  "url": "sec-ch01-02-VectorsIn3D.html#example-ch01-02-ex-2-1",
  "type": "Example",
  "number": "1.2.7",
  "title": "",
  "body": "  Sketch the plane parallel to the -plane through . Moreover, write an equation for this plane.    The -plane is defined by the equation , and any plane parallel to it consists of all points whose -coordinate is equal to one fixed constant. Since our plane must contain the point , that constant is 9, so the plane is defined by the equation   To sketch it, draw the -axes (following the right-hand rule), mark the value 9 on the -axis, and through that mark draw a copy of the -plane. The plane contains the point and, more generally, every point of the form .   The plane parallel to the x z-plane through the point (1,9,4).     "
},
{
  "id": "sec-ch01-02-VectorsIn3D-10",
  "level": "2",
  "url": "sec-ch01-02-VectorsIn3D.html#sec-ch01-02-VectorsIn3D-10",
  "type": "Definition",
  "number": "1.2.8",
  "title": "Vectors in <span class=\"process-math\">\\(xyz\\)<\/span>-Space.",
  "body": " Vectors in -Space   In the -plane, we represent vectors in standard position using the notation . In -space, we represent vectors in standard position using the notation .  If a vector is given by its starting point and ending point , we can shift it to standard position by using the formula .  A vector in standard position is also called a position vector.   "
},
{
  "id": "fig-ch01-02-vector-2-5-3",
  "level": "2",
  "url": "sec-ch01-02-VectorsIn3D.html#fig-ch01-02-vector-2-5-3",
  "type": "Figure",
  "number": "1.2.6",
  "title": "",
  "body": " The vector , drawn in standard position in -space.    "
},
{
  "id": "sec-ch01-02-VectorsIn3D-12",
  "level": "2",
  "url": "sec-ch01-02-VectorsIn3D.html#sec-ch01-02-VectorsIn3D-12",
  "type": "Remark",
  "number": "1.2.9",
  "title": "Vector Operations in <span class=\"process-math\">\\(xyz\\)<\/span>-Space.",
  "body": " Vector Operations in -Space  Vector operations in -space work exactly the same as in the -plane. We do operations coordinate-wise.  Let , , and be a real number (scalar). Then                .     Note: Geometrically, everything works the same. Adding\/subtracting vectors can be done using the Triangle Rule. Scaling a vector changes its length and potentially flips the direction of the vector. It is harder to draw now, though...  "
},
{
  "id": "example-ch01-02-ex-2-2",
  "level": "2",
  "url": "sec-ch01-02-VectorsIn3D.html#example-ch01-02-ex-2-2",
  "type": "Example",
  "number": "1.2.10",
  "title": "",
  "body": "  Given and , compute .    Working from the inside out, we first compute the vector coordinate-wise:   Its magnitude is   and hence .   "
},
{
  "id": "sec-ch01-02-VectorsIn3D-14",
  "level": "2",
  "url": "sec-ch01-02-VectorsIn3D.html#sec-ch01-02-VectorsIn3D-14",
  "type": "Definition",
  "number": "1.2.11",
  "title": "Distance and Midpoint Formula.",
  "body": " Distance and Midpoint Formula   Given two points and in -space, we denote the line segment connecting and by . Moreover, we have that     The distance between the points and (the length of the line segment ) is given by     The midpoint on the line segment is given by      Note that the distance between and is simply .   "
},
{
  "id": "fig-ch01-02-midpoint",
  "level": "2",
  "url": "sec-ch01-02-VectorsIn3D.html#fig-ch01-02-midpoint",
  "type": "Figure",
  "number": "1.2.7",
  "title": "",
  "body": " From Briggs, et al., Calculus Early Transcendentals (3e), Figure 13.33   Two points P and Q in xyz-space connected by a line segment, illustrating the midpoint formula.   Two points and in -space connected by a line segment, illustrating the midpoint formula.    "
},
{
  "id": "sec-ch01-02-VectorsIn3D-16",
  "level": "2",
  "url": "sec-ch01-02-VectorsIn3D.html#sec-ch01-02-VectorsIn3D-16",
  "type": "Remark",
  "number": "1.2.12",
  "title": "Magnitude.",
  "body": " Magnitude  Given a 3D vector , then . As before, is a unit vector if .  "
},
{
  "id": "sec-ch01-02-VectorsIn3D-17",
  "level": "2",
  "url": "sec-ch01-02-VectorsIn3D.html#sec-ch01-02-VectorsIn3D-17",
  "type": "Remark",
  "number": "1.2.13",
  "title": "Recall: Unit Vector in the Direction of <span class=\"process-math\">\\(\\vec{v}\\)<\/span>.",
  "body": " Recall: Unit Vector in the Direction of  When working with a 3D vector , we can't define its direction by a single angle anymore (since is contained in infinitely many planes). Instead, we focus on the unit vector in the direction of .  Given a nonzero vector , the vector is a unit vector in the direction of .  "
},
{
  "id": "example-ch01-02-ex-2-3",
  "level": "2",
  "url": "sec-ch01-02-VectorsIn3D.html#example-ch01-02-ex-2-3",
  "type": "Example",
  "number": "1.2.14",
  "title": "",
  "body": "  Given , find:  (a) A unit vector in the direction of .  (b) All vectors of length 3 parallel to .    The magnitude of is , so a unit vector in the direction of is     A vector of length 3 parallel to points either in the direction of or in the direction opposite of , so the only two such vectors are    "
},
{
  "id": "sec-ch01-02-VectorsIn3D-19",
  "level": "2",
  "url": "sec-ch01-02-VectorsIn3D.html#sec-ch01-02-VectorsIn3D-19",
  "type": "Definition",
  "number": "1.2.15",
  "title": "Coordinate Vectors.",
  "body": " Coordinate Vectors   In -space, the following vectors are called coordinate vectors:      .     .     .     Given a vector , we can also write in the form .   "
},
{
  "id": "Coordinate-Vectors-Animation-Web",
  "level": "2",
  "url": "sec-ch01-02-VectorsIn3D.html#Coordinate-Vectors-Animation-Web",
  "type": "Figure",
  "number": "1.2.8",
  "title": "",
  "body": " Vector Addition   An animation that expresses a vector as the sum of its coordinate vectors.   "
},
{
  "id": "example-ch01-02-ex-2-4",
  "level": "2",
  "url": "sec-ch01-02-VectorsIn3D.html#example-ch01-02-ex-2-4",
  "type": "Example",
  "number": "1.2.16",
  "title": "",
  "body": "  Verify that .    Writing each scaled coordinate vector in component form and adding coordinate-wise:   as claimed.   "
},
{
  "id": "sec-ch01-03-DotProduct",
  "level": "1",
  "url": "sec-ch01-03-DotProduct.html",
  "type": "Section",
  "number": "1.3",
  "title": "The Dot Product",
  "body": " The Dot Product   Dot Product   Let and be two vectors in the -plane (or in -space; just add an extra entry). Then the dot product of and , denoted by , is given by: .  If and , the dot product can also be written as , where , and is the angle between and .        The dot product of two vectors is a scalar (number), not a vector.    Even though formulas 1 and 2 are equivalent, formula 1 is more useful for computation, formula 2 is more useful for applications.    Formula 2 also works in 3D space. Any two nonzero vectors, not on the same line, define a unique plane (later we will see how to write an equation for this plane). The formula uses the angle between the vectors in this unique plane.   Two non-parallel vectors and in -space and the plane they define.      Formula 2 is undefined if or equal .       Any time we say the angle between the vectors , unless otherwise stated, we mean the angle that is between 0 and    Two vectors and their interior and exterior angles.       Compute the following:      , using formula 1 .     , using formula 2 (you may assume the angle between the vectors is ).       Formula 1 multiplies the corresponding components and adds the results:     The magnitudes are and , so formula 2 gives which agrees with the result of item 1: the two formulas are equivalent, and the dot product does not depend on the order of the vectors.      Find the angle between and . What happens if we use the dot product to find the angle between and ?    Since both vectors are nonzero, we can solve formula 2 for , computing the dot product with formula 1:   For and the dot product is , so   We get a right angle: even though points along the negative -axis, the angle between the two vectors that lies between 0 and is , so the vectors are perpendicular.     Orthogonality   Two vectors and in 2D or 3D are orthogonal if .     Orthogonal is another word for perpendicular (as defined in geometry). In 3D, the vectors are perpendicular in the plane they define.   The vectors and are orthogonal       Determine whether the vectors and are perpendicular using the dot product.    We compute the dot product using formula 1:   Since , the vectors are orthogonal, i.e. perpendicular.     Orthogonal Projections  The dot product allows us define projections. Think of projections as squishing (casting a shadow of) one vector into another.    Orthogonal Projections   Let and be two vectors (in 2D or 3D), with . The orthogonal projection (or simply projection ) of into is given by .     The orthogonal projection of onto for the two possible ranges of the angle between them.    . The orthogonal projection of u onto v when the angle theta between them is at least 0 and less than pi over 2.     . The orthogonal projection of u onto v when the angle theta between them is greater than pi over 2 and at most pi.      You can minimize the side bar by clicking on the arrow icon. You can save a copy and create your own version of the graph by clicking on the \"Save\" button in the upper right corner of the graph. You can open in a new page from here: link to the left graph , link to the right graph         When we say that we are projecting into , we are actually projecting into the line containing .    As seen in the pictures, is a vector. Specifically, a scalar multiple of .    Important: As seen in the pictures, if the angle between and satisfies is in the direction of . If is in the direction opposite of .    What happens if the angle between and is or ?        Given and , compute . Are and proj parallel? Justify your answer.    We compute the two dot products in the projection formula:   Hence   Yes, they are parallel: is a scalar multiple of , so the two vectors lie on the same line. Since the scalar is negative, points in the direction opposite of .     Given any nonzero vector , we have that   We can use this fact to re-write the projection formula as follows: .    Scalar Component in the Direction of a Vector   Let and be two vectors with . The scalar component of in the direction of is given by   Moreover, we have that .     The importance of the quantity scal      is a shortcut to compute .    From Note 6, if , then , and hence is in the direction of .    If , then is in the direction opposite of .        Given , and , find and . Moreover, determine whether and are in the direction of or opposite to it.   Vecotrs u, v, and w with their projections onto v shown in the xy-plane.      First, . Then   Since , the projection is in the direction of ; since , the projection is in the direction opposite of , as the picture above shows. (Note that , which is why the two scalar components are negatives of each other.)     Summary  Given two vectors and with ; and the angle between and , then:     If or is in the direction of .    If or is in the direction opposite of .    If or .    A shortcut to find is to compute it as .      "
},
{
  "id": "sec-ch01-03-DotProduct-2",
  "level": "2",
  "url": "sec-ch01-03-DotProduct.html#sec-ch01-03-DotProduct-2",
  "type": "Definition",
  "number": "1.3.1",
  "title": "Dot Product.",
  "body": " Dot Product   Let and be two vectors in the -plane (or in -space; just add an extra entry). Then the dot product of and , denoted by , is given by: .  If and , the dot product can also be written as , where , and is the angle between and .   "
},
{
  "id": "sec-ch01-03-DotProduct-3",
  "level": "2",
  "url": "sec-ch01-03-DotProduct.html#sec-ch01-03-DotProduct-3",
  "type": "Remark",
  "number": "1.3.2",
  "title": "",
  "body": "    The dot product of two vectors is a scalar (number), not a vector.    Even though formulas 1 and 2 are equivalent, formula 1 is more useful for computation, formula 2 is more useful for applications.    Formula 2 also works in 3D space. Any two nonzero vectors, not on the same line, define a unique plane (later we will see how to write an equation for this plane). The formula uses the angle between the vectors in this unique plane.   Two non-parallel vectors and in -space and the plane they define.      Formula 2 is undefined if or equal .     "
},
{
  "id": "sec-ch01-03-DotProduct-4",
  "level": "2",
  "url": "sec-ch01-03-DotProduct.html#sec-ch01-03-DotProduct-4",
  "type": "Note",
  "number": "1.3.3",
  "title": "",
  "body": " Any time we say the angle between the vectors , unless otherwise stated, we mean the angle that is between 0 and    Two vectors and their interior and exterior angles.    "
},
{
  "id": "example-ch01-03-ex-3-1",
  "level": "2",
  "url": "sec-ch01-03-DotProduct.html#example-ch01-03-ex-3-1",
  "type": "Example",
  "number": "1.3.4",
  "title": "",
  "body": "  Compute the following:      , using formula 1 .     , using formula 2 (you may assume the angle between the vectors is ).       Formula 1 multiplies the corresponding components and adds the results:     The magnitudes are and , so formula 2 gives which agrees with the result of item 1: the two formulas are equivalent, and the dot product does not depend on the order of the vectors.   "
},
{
  "id": "example-ch01-03-ex-3-2",
  "level": "2",
  "url": "sec-ch01-03-DotProduct.html#example-ch01-03-ex-3-2",
  "type": "Example",
  "number": "1.3.5",
  "title": "",
  "body": "  Find the angle between and . What happens if we use the dot product to find the angle between and ?    Since both vectors are nonzero, we can solve formula 2 for , computing the dot product with formula 1:   For and the dot product is , so   We get a right angle: even though points along the negative -axis, the angle between the two vectors that lies between 0 and is , so the vectors are perpendicular.   "
},
{
  "id": "sec-ch01-03-DotProduct-7",
  "level": "2",
  "url": "sec-ch01-03-DotProduct.html#sec-ch01-03-DotProduct-7",
  "type": "Definition",
  "number": "1.3.6",
  "title": "Orthogonality.",
  "body": " Orthogonality   Two vectors and in 2D or 3D are orthogonal if .   "
},
{
  "id": "sec-ch01-03-DotProduct-8",
  "level": "2",
  "url": "sec-ch01-03-DotProduct.html#sec-ch01-03-DotProduct-8",
  "type": "Remark",
  "number": "1.3.7",
  "title": "",
  "body": " Orthogonal is another word for perpendicular (as defined in geometry). In 3D, the vectors are perpendicular in the plane they define.   The vectors and are orthogonal    "
},
{
  "id": "example-ch01-03-ex-3-3",
  "level": "2",
  "url": "sec-ch01-03-DotProduct.html#example-ch01-03-ex-3-3",
  "type": "Example",
  "number": "1.3.8",
  "title": "",
  "body": "  Determine whether the vectors and are perpendicular using the dot product.    We compute the dot product using formula 1:   Since , the vectors are orthogonal, i.e. perpendicular.   "
},
{
  "id": "sec-ch01-03-DotProduct-10",
  "level": "2",
  "url": "sec-ch01-03-DotProduct.html#sec-ch01-03-DotProduct-10",
  "type": "Note",
  "number": "1.3.9",
  "title": "Orthogonal Projections.",
  "body": " Orthogonal Projections  The dot product allows us define projections. Think of projections as squishing (casting a shadow of) one vector into another.  "
},
{
  "id": "sec-ch01-03-DotProduct-11",
  "level": "2",
  "url": "sec-ch01-03-DotProduct.html#sec-ch01-03-DotProduct-11",
  "type": "Definition",
  "number": "1.3.10",
  "title": "Orthogonal Projections.",
  "body": " Orthogonal Projections   Let and be two vectors (in 2D or 3D), with . The orthogonal projection (or simply projection ) of into is given by .   "
},
{
  "id": "fig-ch01-03-projection-cases",
  "level": "2",
  "url": "sec-ch01-03-DotProduct.html#fig-ch01-03-projection-cases",
  "type": "Figure",
  "number": "1.3.4",
  "title": "",
  "body": " The orthogonal projection of onto for the two possible ranges of the angle between them.    . The orthogonal projection of u onto v when the angle theta between them is at least 0 and less than pi over 2.     . The orthogonal projection of u onto v when the angle theta between them is greater than pi over 2 and at most pi.     "
},
{
  "id": "sec-ch01-03-DotProduct-14",
  "level": "2",
  "url": "sec-ch01-03-DotProduct.html#sec-ch01-03-DotProduct-14",
  "type": "Remark",
  "number": "1.3.11",
  "title": "",
  "body": "    When we say that we are projecting into , we are actually projecting into the line containing .    As seen in the pictures, is a vector. Specifically, a scalar multiple of .    Important: As seen in the pictures, if the angle between and satisfies is in the direction of . If is in the direction opposite of .    What happens if the angle between and is or ?     "
},
{
  "id": "example-ch01-03-ex-3-4",
  "level": "2",
  "url": "sec-ch01-03-DotProduct.html#example-ch01-03-ex-3-4",
  "type": "Example",
  "number": "1.3.12",
  "title": "",
  "body": "  Given and , compute . Are and proj parallel? Justify your answer.    We compute the two dot products in the projection formula:   Hence   Yes, they are parallel: is a scalar multiple of , so the two vectors lie on the same line. Since the scalar is negative, points in the direction opposite of .   "
},
{
  "id": "sec-ch01-03-DotProduct-16",
  "level": "2",
  "url": "sec-ch01-03-DotProduct.html#sec-ch01-03-DotProduct-16",
  "type": "Remark",
  "number": "1.3.13",
  "title": "",
  "body": " Given any nonzero vector , we have that   We can use this fact to re-write the projection formula as follows: .  "
},
{
  "id": "sec-ch01-03-DotProduct-17",
  "level": "2",
  "url": "sec-ch01-03-DotProduct.html#sec-ch01-03-DotProduct-17",
  "type": "Definition",
  "number": "1.3.14",
  "title": "Scalar Component in the Direction of a Vector.",
  "body": " Scalar Component in the Direction of a Vector   Let and be two vectors with . The scalar component of in the direction of is given by   Moreover, we have that .   "
},
{
  "id": "sec-ch01-03-DotProduct-18",
  "level": "2",
  "url": "sec-ch01-03-DotProduct.html#sec-ch01-03-DotProduct-18",
  "type": "Remark",
  "number": "1.3.15",
  "title": "The importance of the quantity scal <span class=\"process-math\">\\({ }_{\\vec{v}} \\vec{u}\\)<\/span>.",
  "body": " The importance of the quantity scal      is a shortcut to compute .    From Note 6, if , then , and hence is in the direction of .    If , then is in the direction opposite of .     "
},
{
  "id": "example-ch01-03-ex-3-5",
  "level": "2",
  "url": "sec-ch01-03-DotProduct.html#example-ch01-03-ex-3-5",
  "type": "Example",
  "number": "1.3.16",
  "title": "",
  "body": "  Given , and , find and . Moreover, determine whether and are in the direction of or opposite to it.   Vecotrs u, v, and w with their projections onto v shown in the xy-plane.      First, . Then   Since , the projection is in the direction of ; since , the projection is in the direction opposite of , as the picture above shows. (Note that , which is why the two scalar components are negatives of each other.)   "
},
{
  "id": "sec-ch01-03-DotProduct-20",
  "level": "2",
  "url": "sec-ch01-03-DotProduct.html#sec-ch01-03-DotProduct-20",
  "type": "Note",
  "number": "1.3.17",
  "title": "Summary.",
  "body": " Summary  Given two vectors and with ; and the angle between and , then:     If or is in the direction of .    If or is in the direction opposite of .    If or .    A shortcut to find is to compute it as .     "
},
{
  "id": "sec-ch01-04-CrossProduct",
  "level": "1",
  "url": "sec-ch01-04-CrossProduct.html",
  "type": "Section",
  "number": "1.4",
  "title": "The Cross Product",
  "body": " The Cross Product   The Cross Product Geometric Definition   Given two nonzero vectors and in -space, their cross product, denoted by , is a vector orthogonal to both and with length given by the formula , where is the angle between and .     From OpenStax, Calculus Volume 3, Section 2.4   Two vectors u and v in xyz-space with their cross product u times v shown as a vector orthogonal to both.   Two vectors and in -space with their cross product shown as a vector orthogonal to both.      Direction of  Given two nonzero vectors and not on the same line, to find the direction of :     Put and in standard position.    Let the fingers of your right hand curl from to along (along the angle that is between 0 and ).    The direction of your thumb as you curl in step 2 is the direction of .      We call this method to find the direction of the right-hand rule.   From OpenStax, Calculus Volume 3, Section 2.4   An illustration of the right-hand rule: fingers curl from u to v and the thumb points in the direction of u times v.   An illustration of the right-hand rule: fingers curl from to and the thumb points in the direction of .       Determine which of the following cross product vectors point in the positive -direction.   Four pairs of vectors and in the -plane, cases (a) to (d).     Pair of vectors u and v in the xy-plane for case a. The angle from u to v is 3 pi over 4.     Pair of vectors u and v in the xy-plane for case b. The angle from u to v is 13 pi over 12.       Pair of vectors u and v in the xy-plane for case c. The angle from u to v is 5 pi over 4.     Pair of vectors u and v in the xy-plane for case d. The angle from u to v is 5 pi over 12.       You can minimize the side bar by clicking on the arrow icon. You can save a copy and create your own version of the graph by clicking on the \"Save\" button in the upper right corner of the graph. You can open in a new page from here: link to the top left graph , link to the top right graph , link to the bottom left graph , link to the bottom right graph     In each of the figures (a) (d) above, both vectors lie in the -plane, so points either in the positive or in the negative -direction. By the right-hand rule, it points in the positive -direction exactly when curling from to along the angle between them ( ) is a counterclockwise rotation.  In (a) the counterclockwise rotation from to is , so this rotation is along the angle between the vectors, and points in the positive -direction. The same happens in (d), where the counterclockwise rotation is .  In (b) the counterclockwise rotation from to is , so the angle between the vectors is , and curling from to along this angle is a clockwise rotation: points in the negative -direction. The same happens in (c), where the angle between the vectors is , again traversed clockwise.  Hence only the cross products in (a) and (d) point in the positive -direction.        If (if or ), the direction of is undefined.    For nonzero and , the cross product is not commutative. In fact,  (they have the same length, but point in opposite directions).        Given the figure below, find:     The direction of .    The magnitude of .    The vector .      Vector , and vector , in -space.      From the figure, lies on the positive -axis and lies on the positive -axis. Curling the fingers of the right hand from the positive -axis towards the positive -axis, the thumb points in the positive -direction. Hence points in the positive -direction (the direction of ).    The angle between the positive -axis and the positive -axis is , so     Combining the two previous parts, is the vector of length 8 pointing in the positive -direction:      Cross Products Computational Definition   Given two vectors and (they could be the zero vector) in -space, .      Compute given that and . What is ?    Using the computational definition:   For the second question there is no need to compute another determinant: since ,      The Cross Product and Parallel Vectors  Given two vectors and , if and are parallel (lie on the same line).     Determine whether the vectors and lie on the same line.    We compute the cross product:   Since , the vectors are parallel, and hence they lie on the same line.     Another way to determine whether two vectors and are parallel is to check whether there exists a scalar such that .     Determine whether and are parallel.    Suppose there were a scalar such that . Comparing components:   The second component requires a different scalar than the other two, so no such exists and the vectors are not parallel. We can confirm this with the cross product:      The Cross Product and Parallelograms  Given two nonzero vectors and is the area of the parallelogram defined by and .    From OpenStax, Calculus Volume 3, Section 2.4   A parallelogram defined by vectors u and v, with the area equal to the magnitude of u cross product v.   A parallelogram defined by vectors and , with the area equal to the magnitude of .       Find the area of the triangle with vertices given by the points .    The triangle is half of the parallelogram defined by the vectors and , so its area is . In standard position:   Their cross product is   with magnitude   Hence the area of the triangle is .     Properties of the Cross Product  Given two vectors and in -space and real numbers, then                           "
},
{
  "id": "sec-ch01-04-CrossProduct-2",
  "level": "2",
  "url": "sec-ch01-04-CrossProduct.html#sec-ch01-04-CrossProduct-2",
  "type": "Definition",
  "number": "1.4.1",
  "title": "The Cross Product Geometric Definition.",
  "body": " The Cross Product Geometric Definition   Given two nonzero vectors and in -space, their cross product, denoted by , is a vector orthogonal to both and with length given by the formula , where is the angle between and .   "
},
{
  "id": "fig-ch01-04-cross-product-orthogonal",
  "level": "2",
  "url": "sec-ch01-04-CrossProduct.html#fig-ch01-04-cross-product-orthogonal",
  "type": "Figure",
  "number": "1.4.1",
  "title": "",
  "body": " From OpenStax, Calculus Volume 3, Section 2.4   Two vectors u and v in xyz-space with their cross product u times v shown as a vector orthogonal to both.   Two vectors and in -space with their cross product shown as a vector orthogonal to both.    "
},
{
  "id": "sec-ch01-04-CrossProduct-4",
  "level": "2",
  "url": "sec-ch01-04-CrossProduct.html#sec-ch01-04-CrossProduct-4",
  "type": "Note",
  "number": "1.4.2",
  "title": "Direction of <span class=\"process-math\">\\(\\vec{u} \\times \\vec{v}\\)<\/span>.",
  "body": " Direction of  Given two nonzero vectors and not on the same line, to find the direction of :     Put and in standard position.    Let the fingers of your right hand curl from to along (along the angle that is between 0 and ).    The direction of your thumb as you curl in step 2 is the direction of .     "
},
{
  "id": "fig-ch01-04-right-hand-rule",
  "level": "2",
  "url": "sec-ch01-04-CrossProduct.html#fig-ch01-04-right-hand-rule",
  "type": "Figure",
  "number": "1.4.2",
  "title": "",
  "body": " From OpenStax, Calculus Volume 3, Section 2.4   An illustration of the right-hand rule: fingers curl from u to v and the thumb points in the direction of u times v.   An illustration of the right-hand rule: fingers curl from to and the thumb points in the direction of .    "
},
{
  "id": "example-ch01-04-ex-4-1",
  "level": "2",
  "url": "sec-ch01-04-CrossProduct.html#example-ch01-04-ex-4-1",
  "type": "Example",
  "number": "1.4.3",
  "title": "",
  "body": "  Determine which of the following cross product vectors point in the positive -direction.   Four pairs of vectors and in the -plane, cases (a) to (d).     Pair of vectors u and v in the xy-plane for case a. The angle from u to v is 3 pi over 4.     Pair of vectors u and v in the xy-plane for case b. The angle from u to v is 13 pi over 12.       Pair of vectors u and v in the xy-plane for case c. The angle from u to v is 5 pi over 4.     Pair of vectors u and v in the xy-plane for case d. The angle from u to v is 5 pi over 12.       You can minimize the side bar by clicking on the arrow icon. You can save a copy and create your own version of the graph by clicking on the \"Save\" button in the upper right corner of the graph. You can open in a new page from here: link to the top left graph , link to the top right graph , link to the bottom left graph , link to the bottom right graph     In each of the figures (a) (d) above, both vectors lie in the -plane, so points either in the positive or in the negative -direction. By the right-hand rule, it points in the positive -direction exactly when curling from to along the angle between them ( ) is a counterclockwise rotation.  In (a) the counterclockwise rotation from to is , so this rotation is along the angle between the vectors, and points in the positive -direction. The same happens in (d), where the counterclockwise rotation is .  In (b) the counterclockwise rotation from to is , so the angle between the vectors is , and curling from to along this angle is a clockwise rotation: points in the negative -direction. The same happens in (c), where the angle between the vectors is , again traversed clockwise.  Hence only the cross products in (a) and (d) point in the positive -direction.   "
},
{
  "id": "sec-ch01-04-CrossProduct-8",
  "level": "2",
  "url": "sec-ch01-04-CrossProduct.html#sec-ch01-04-CrossProduct-8",
  "type": "Remark",
  "number": "1.4.4",
  "title": "",
  "body": "    If (if or ), the direction of is undefined.    For nonzero and , the cross product is not commutative. In fact,  (they have the same length, but point in opposite directions).     "
},
{
  "id": "example-ch01-04-ex-4-2",
  "level": "2",
  "url": "sec-ch01-04-CrossProduct.html#example-ch01-04-ex-4-2",
  "type": "Example",
  "number": "1.4.5",
  "title": "",
  "body": "  Given the figure below, find:     The direction of .    The magnitude of .    The vector .      Vector , and vector , in -space.      From the figure, lies on the positive -axis and lies on the positive -axis. Curling the fingers of the right hand from the positive -axis towards the positive -axis, the thumb points in the positive -direction. Hence points in the positive -direction (the direction of ).    The angle between the positive -axis and the positive -axis is , so     Combining the two previous parts, is the vector of length 8 pointing in the positive -direction:    "
},
{
  "id": "sec-ch01-04-CrossProduct-10",
  "level": "2",
  "url": "sec-ch01-04-CrossProduct.html#sec-ch01-04-CrossProduct-10",
  "type": "Definition",
  "number": "1.4.6",
  "title": "Cross Products Computational Definition.",
  "body": " Cross Products Computational Definition   Given two vectors and (they could be the zero vector) in -space, .   "
},
{
  "id": "example-ch01-04-ex-4-3",
  "level": "2",
  "url": "sec-ch01-04-CrossProduct.html#example-ch01-04-ex-4-3",
  "type": "Example",
  "number": "1.4.7",
  "title": "",
  "body": "  Compute given that and . What is ?    Using the computational definition:   For the second question there is no need to compute another determinant: since ,    "
},
{
  "id": "sec-ch01-04-CrossProduct-12",
  "level": "2",
  "url": "sec-ch01-04-CrossProduct.html#sec-ch01-04-CrossProduct-12",
  "type": "Note",
  "number": "1.4.8",
  "title": "The Cross Product and Parallel Vectors.",
  "body": " The Cross Product and Parallel Vectors  Given two vectors and , if and are parallel (lie on the same line).  "
},
{
  "id": "example-ch01-04-ex-4-4",
  "level": "2",
  "url": "sec-ch01-04-CrossProduct.html#example-ch01-04-ex-4-4",
  "type": "Example",
  "number": "1.4.9",
  "title": "",
  "body": "  Determine whether the vectors and lie on the same line.    We compute the cross product:   Since , the vectors are parallel, and hence they lie on the same line.   "
},
{
  "id": "sec-ch01-04-CrossProduct-14",
  "level": "2",
  "url": "sec-ch01-04-CrossProduct.html#sec-ch01-04-CrossProduct-14",
  "type": "Note",
  "number": "1.4.10",
  "title": "",
  "body": " Another way to determine whether two vectors and are parallel is to check whether there exists a scalar such that .  "
},
{
  "id": "example-ch01-04-ex-4-5",
  "level": "2",
  "url": "sec-ch01-04-CrossProduct.html#example-ch01-04-ex-4-5",
  "type": "Example",
  "number": "1.4.11",
  "title": "",
  "body": "  Determine whether and are parallel.    Suppose there were a scalar such that . Comparing components:   The second component requires a different scalar than the other two, so no such exists and the vectors are not parallel. We can confirm this with the cross product:    "
},
{
  "id": "sec-ch01-04-CrossProduct-16",
  "level": "2",
  "url": "sec-ch01-04-CrossProduct.html#sec-ch01-04-CrossProduct-16",
  "type": "Remark",
  "number": "1.4.12",
  "title": "The Cross Product and Parallelograms.",
  "body": " The Cross Product and Parallelograms  Given two nonzero vectors and is the area of the parallelogram defined by and .  "
},
{
  "id": "fig-ch01-04-parallelogram",
  "level": "2",
  "url": "sec-ch01-04-CrossProduct.html#fig-ch01-04-parallelogram",
  "type": "Figure",
  "number": "1.4.5",
  "title": "",
  "body": " From OpenStax, Calculus Volume 3, Section 2.4   A parallelogram defined by vectors u and v, with the area equal to the magnitude of u cross product v.   A parallelogram defined by vectors and , with the area equal to the magnitude of .    "
},
{
  "id": "example-ch01-04-ex-4-6",
  "level": "2",
  "url": "sec-ch01-04-CrossProduct.html#example-ch01-04-ex-4-6",
  "type": "Example",
  "number": "1.4.13",
  "title": "",
  "body": "  Find the area of the triangle with vertices given by the points .    The triangle is half of the parallelogram defined by the vectors and , so its area is . In standard position:   Their cross product is   with magnitude   Hence the area of the triangle is .   "
},
{
  "id": "sec-ch01-04-CrossProduct-19",
  "level": "2",
  "url": "sec-ch01-04-CrossProduct.html#sec-ch01-04-CrossProduct-19",
  "type": "Remark",
  "number": "1.4.14",
  "title": "",
  "body": " Properties of the Cross Product  Given two vectors and in -space and real numbers, then                          "
},
{
  "id": "sec-ch02-01-VectorValuedFunctions",
  "level": "1",
  "url": "sec-ch02-01-VectorValuedFunctions.html",
  "type": "Section",
  "number": "2.1",
  "title": "Vector-Valued Functions",
  "body": " Vector-Valued Functions   Think of a point tracing a path as it moves through -space (for example, think of tracing the path a mosquito travels as it flies through a room). We can think of the curve traced by this point in two ways:     The position of the point at a time , given by .    The position of the point at a time , given by the endpoint of the vector .        The position of a point on a curve in -space at three times , , , given by the position vectors , , .    A point on a curve in xyz-space at time t0 with position vector r(t0).   A point on a curve in xyz-space at time t0 with position vector r(t0).   A point on a curve in -space at time with position vector .      A point on a curve in xyz-space at time t1 with position vector r(t1).   A point on a curve in xyz-space at time t1 with position vector r(t1).   A point on a curve in -space at time with position vector .      A point on a curve in xyz-space at time t2 with position vector r(t2).   A point on a curve in xyz-space at time t2 with position vector r(t2).   A point on a curve in -space at time with position vector .        A point on a curve in xyz-space at time t0 with position vector r(t0).     Vector-Valued Function   A vector-valued function is a function which assigns to each input (the independent variable), an output of a vector. Mathematically, a vector-valued function can be written in the form where each component of is a function of (each component is a dependent variable).     The domain of is the intersection of the domains of , and .     The graph of , is shown below. If we don't restrict , what is the domain of ?   The helix traced by the vector , for from 0 to 10, in -space.      The domain of is the intersection of the domains of its three components. Each of , , and is defined for every real number , so that is, the domain is all real numbers (and the graph becomes a helix spiraling upwards forever in both directions).      Find the domain of .    The domain of is the intersection of the domains of its two components. The first, , is defined for , hence . The second, , is defined for , hence . The intersection of the two gives us .     If we write and don't specify an interval, assume that can take any possible value in the domain of .    The output vector of a vector-valued function doesn't have to be three dimensional. For example, the function traces the graph of on the interval .   The line segment traced by the vector r of t with coordinates x = t, y = negative t over 2, plus 1, for t from 0 to 2, in the xy-plane.      Since vector-valued functions trace a curve as time passes by, we can talk about the orientation (or direction) in which the curve is traced.     For each of the following planar curves, write a vector-valued function which traces them with the specified orientation. Moreover, graph the given curves using arrows to indicate the orientation.     A circle of radius 1 (traced once), centred at the origin, oriented counterclockwise, starting at .    The graph of , on the interval , traced from left to right (relative to the -axis).       The function traces the circle of radius 1 centred at the origin, since . It starts at , passes through at , through at , and through at  a counterclockwise motion and returns to at , tracing the circle exactly once. To graph it, draw the unit circle with the arrows on it pointing counterclockwise.   The unit circle oriented counter-clockwise.      Letting , the point on the graph above is , so   Since increases as increases, the parabola is traced from left to right: starting at , down to the vertex , and up to . To graph it, draw this piece of the upward parabola with the arrows on it pointing from left to right.   The parabola y equals x squared minus one, from x equals -1 to x equals 1, traversed from left to right.       Generally if you want to quickly parametrize a function on the interval from left to right, then you can use for .     For the following planar curve, write a vector-valued function which traces it with the specified orientation. Moreover, graph the given curve using arrows to indicate the orientation.  The graph of , on the interval , traced from right to left (relative to the -axis)    To trace the graph from right to left we need the -coordinate to decrease as increases and there multiple options to achieve this. Here are three:   Option A Let . Then and runs from 5 down to 1 as runs from 0 to 4. Hence   Indeed, and , so the curve starts at the right endpoint and ends at the left endpoint .   Option B Let . Then and runs from 5 down to 1 as runs from 1 to 5. Hence   Indeed, and , so the curve starts at the right endpoint and ends at the left endpoint .   Option C Let . Then and runs from 5 down to 1 as runs from to . Hence   Indeed, and , so the curve starts at the right endpoint and ends at the left endpoint .  To graph it, draw the piece of the upward parabola with vertex and -intercepts and , between and , with the arrows on it pointing from right to left.   The parabola y equals x squared minus 4 x plus three, from x equals 1 to x equals 5, traversed from right to left.       Generally if you want to quickly parametrize a function on the interval from right to left, then you can use on of the following.      for .     for .     for .       Parametric Equations for a Line  The components , and of are also called parametric equations.    Line in Parametric Form   A line in -space (or in 2D space) can be defined as a vector-valued function by the equation where is any point on the line, and (the direction vector) gives you the change in each coordinate.  The equations , and are the parametric equations that define the line.     Geometrically, the definition above says that you take the line containing (represented by ), and shift it so it passes through the endpoint of .   A line in -space defined by the position vector and a direction vector , illustrating the parametric form: .       Find both the vector equation and the parametric equations of the line through in the direction of the vector . Does the point lie on this line?    Using as the point on the line and as the direction vector, the vector equation of the line is and the parametric equations are   For the point to lie on the line, all three parametric equations must be satisfied by the same value of . From the first equation:   Checking this value in the other two equations:   Both match, so yes: the point lies on the line (it is reached at ).     Given a line , since represents the direction of the line, we can compare lines by comparing their direction vectors.     Determine whether the following pair of lines are parallel, intersect at a single point, or are skew. If they are parallel, determine whether they are the same line. If they intersect at a single point, determine the point of intersection.     The direction vectors are for the first line and for the second. If the lines were parallel there would be a scalar with ; comparing components gives , , and respectively, which is impossible. Hence the lines are not parallel (and in particular they are not the same line).  It remains to determine whether the lines intersect at a single point or are skew. An intersection point may be reached by each line at a different time, so we rename the parameter of the second line and look for values and with . Comparing components gives the system   The second equation of the system gives . Substituting into the first equation:   Since we only used the first two equations, we must check these values in the third: and , so the third equation is also satisfied. Hence the system is consistent and the lines intersect at the single point that is, at the point . (Indeed, as well.)     Intersection of Curves  Assume there are two curves, and , parametrized by the same variable , with vector-valued functions and . The solutions of the equation are not simply the intersection points. They are the intersection points at which the two parametrizations arrive concurrently. For the intersection points one needs to solve , i.e. change one of the parameters.   "
},
{
  "id": "sec-ch02-01-VectorValuedFunctions-2",
  "level": "2",
  "url": "sec-ch02-01-VectorValuedFunctions.html#sec-ch02-01-VectorValuedFunctions-2",
  "type": "Note",
  "number": "2.1.1",
  "title": "",
  "body": " Think of a point tracing a path as it moves through -space (for example, think of tracing the path a mosquito travels as it flies through a room). We can think of the curve traced by this point in two ways:     The position of the point at a time , given by .    The position of the point at a time , given by the endpoint of the vector .     "
},
{
  "id": "fig-ch02-01-position-vectors",
  "level": "2",
  "url": "sec-ch02-01-VectorValuedFunctions.html#fig-ch02-01-position-vectors",
  "type": "Figure",
  "number": "2.1.1",
  "title": "",
  "body": " The position of a point on a curve in -space at three times , , , given by the position vectors , , .    A point on a curve in xyz-space at time t0 with position vector r(t0).   A point on a curve in xyz-space at time t0 with position vector r(t0).   A point on a curve in -space at time with position vector .      A point on a curve in xyz-space at time t1 with position vector r(t1).   A point on a curve in xyz-space at time t1 with position vector r(t1).   A point on a curve in -space at time with position vector .      A point on a curve in xyz-space at time t2 with position vector r(t2).   A point on a curve in xyz-space at time t2 with position vector r(t2).   A point on a curve in -space at time with position vector .      "
},
{
  "id": "fig-ch02-01-position-vectors-interactive",
  "level": "2",
  "url": "sec-ch02-01-VectorValuedFunctions.html#fig-ch02-01-position-vectors-interactive",
  "type": "Figure",
  "number": "2.1.2",
  "title": "",
  "body": " A point on a curve in xyz-space at time t0 with position vector r(t0).   "
},
{
  "id": "sec-ch02-01-VectorValuedFunctions-5",
  "level": "2",
  "url": "sec-ch02-01-VectorValuedFunctions.html#sec-ch02-01-VectorValuedFunctions-5",
  "type": "Definition",
  "number": "2.1.2",
  "title": "Vector-Valued Function.",
  "body": " Vector-Valued Function   A vector-valued function is a function which assigns to each input (the independent variable), an output of a vector. Mathematically, a vector-valued function can be written in the form where each component of is a function of (each component is a dependent variable).   "
},
{
  "id": "sec-ch02-01-VectorValuedFunctions-6",
  "level": "2",
  "url": "sec-ch02-01-VectorValuedFunctions.html#sec-ch02-01-VectorValuedFunctions-6",
  "type": "Remark",
  "number": "2.1.3",
  "title": "",
  "body": " The domain of is the intersection of the domains of , and .  "
},
{
  "id": "example-ch02-01-ex-5-1",
  "level": "2",
  "url": "sec-ch02-01-VectorValuedFunctions.html#example-ch02-01-ex-5-1",
  "type": "Example",
  "number": "2.1.4",
  "title": "",
  "body": "  The graph of , is shown below. If we don't restrict , what is the domain of ?   The helix traced by the vector , for from 0 to 10, in -space.      The domain of is the intersection of the domains of its three components. Each of , , and is defined for every real number , so that is, the domain is all real numbers (and the graph becomes a helix spiraling upwards forever in both directions).   "
},
{
  "id": "example-ch02-01-ex-5-2",
  "level": "2",
  "url": "sec-ch02-01-VectorValuedFunctions.html#example-ch02-01-ex-5-2",
  "type": "Example",
  "number": "2.1.5",
  "title": "",
  "body": "  Find the domain of .    The domain of is the intersection of the domains of its two components. The first, , is defined for , hence . The second, , is defined for , hence . The intersection of the two gives us .   "
},
{
  "id": "sec-ch02-01-VectorValuedFunctions-9",
  "level": "2",
  "url": "sec-ch02-01-VectorValuedFunctions.html#sec-ch02-01-VectorValuedFunctions-9",
  "type": "Note",
  "number": "2.1.6",
  "title": "",
  "body": " If we write and don't specify an interval, assume that can take any possible value in the domain of .  "
},
{
  "id": "sec-ch02-01-VectorValuedFunctions-10",
  "level": "2",
  "url": "sec-ch02-01-VectorValuedFunctions.html#sec-ch02-01-VectorValuedFunctions-10",
  "type": "Remark",
  "number": "2.1.7",
  "title": "",
  "body": " The output vector of a vector-valued function doesn't have to be three dimensional. For example, the function traces the graph of on the interval .   The line segment traced by the vector r of t with coordinates x = t, y = negative t over 2, plus 1, for t from 0 to 2, in the xy-plane.    "
},
{
  "id": "sec-ch02-01-VectorValuedFunctions-11",
  "level": "2",
  "url": "sec-ch02-01-VectorValuedFunctions.html#sec-ch02-01-VectorValuedFunctions-11",
  "type": "Note",
  "number": "2.1.8",
  "title": "",
  "body": " Since vector-valued functions trace a curve as time passes by, we can talk about the orientation (or direction) in which the curve is traced.  "
},
{
  "id": "example-ch02-01-ex-5-3",
  "level": "2",
  "url": "sec-ch02-01-VectorValuedFunctions.html#example-ch02-01-ex-5-3",
  "type": "Example",
  "number": "2.1.9",
  "title": "",
  "body": "  For each of the following planar curves, write a vector-valued function which traces them with the specified orientation. Moreover, graph the given curves using arrows to indicate the orientation.     A circle of radius 1 (traced once), centred at the origin, oriented counterclockwise, starting at .    The graph of , on the interval , traced from left to right (relative to the -axis).       The function traces the circle of radius 1 centred at the origin, since . It starts at , passes through at , through at , and through at  a counterclockwise motion and returns to at , tracing the circle exactly once. To graph it, draw the unit circle with the arrows on it pointing counterclockwise.   The unit circle oriented counter-clockwise.      Letting , the point on the graph above is , so   Since increases as increases, the parabola is traced from left to right: starting at , down to the vertex , and up to . To graph it, draw this piece of the upward parabola with the arrows on it pointing from left to right.   The parabola y equals x squared minus one, from x equals -1 to x equals 1, traversed from left to right.     "
},
{
  "id": "sec-ch02-01-VectorValuedFunctions-13",
  "level": "2",
  "url": "sec-ch02-01-VectorValuedFunctions.html#sec-ch02-01-VectorValuedFunctions-13",
  "type": "Remark",
  "number": "2.1.10",
  "title": "",
  "body": " Generally if you want to quickly parametrize a function on the interval from left to right, then you can use for .  "
},
{
  "id": "example-ch02-01-ex-5-4",
  "level": "2",
  "url": "sec-ch02-01-VectorValuedFunctions.html#example-ch02-01-ex-5-4",
  "type": "Example",
  "number": "2.1.11",
  "title": "",
  "body": "  For the following planar curve, write a vector-valued function which traces it with the specified orientation. Moreover, graph the given curve using arrows to indicate the orientation.  The graph of , on the interval , traced from right to left (relative to the -axis)    To trace the graph from right to left we need the -coordinate to decrease as increases and there multiple options to achieve this. Here are three:   Option A Let . Then and runs from 5 down to 1 as runs from 0 to 4. Hence   Indeed, and , so the curve starts at the right endpoint and ends at the left endpoint .   Option B Let . Then and runs from 5 down to 1 as runs from 1 to 5. Hence   Indeed, and , so the curve starts at the right endpoint and ends at the left endpoint .   Option C Let . Then and runs from 5 down to 1 as runs from to . Hence   Indeed, and , so the curve starts at the right endpoint and ends at the left endpoint .  To graph it, draw the piece of the upward parabola with vertex and -intercepts and , between and , with the arrows on it pointing from right to left.   The parabola y equals x squared minus 4 x plus three, from x equals 1 to x equals 5, traversed from right to left.     "
},
{
  "id": "sec-ch02-01-VectorValuedFunctions-15",
  "level": "2",
  "url": "sec-ch02-01-VectorValuedFunctions.html#sec-ch02-01-VectorValuedFunctions-15",
  "type": "Remark",
  "number": "2.1.12",
  "title": "",
  "body": " Generally if you want to quickly parametrize a function on the interval from right to left, then you can use on of the following.      for .     for .     for .     "
},
{
  "id": "sec-ch02-01-VectorValuedFunctions-16",
  "level": "2",
  "url": "sec-ch02-01-VectorValuedFunctions.html#sec-ch02-01-VectorValuedFunctions-16",
  "type": "Remark",
  "number": "2.1.13",
  "title": "Parametric Equations for a Line.",
  "body": " Parametric Equations for a Line  The components , and of are also called parametric equations.  "
},
{
  "id": "sec-ch02-01-VectorValuedFunctions-17",
  "level": "2",
  "url": "sec-ch02-01-VectorValuedFunctions.html#sec-ch02-01-VectorValuedFunctions-17",
  "type": "Definition",
  "number": "2.1.14",
  "title": "Line in Parametric Form.",
  "body": " Line in Parametric Form   A line in -space (or in 2D space) can be defined as a vector-valued function by the equation where is any point on the line, and (the direction vector) gives you the change in each coordinate.  The equations , and are the parametric equations that define the line.   "
},
{
  "id": "sec-ch02-01-VectorValuedFunctions-18",
  "level": "2",
  "url": "sec-ch02-01-VectorValuedFunctions.html#sec-ch02-01-VectorValuedFunctions-18",
  "type": "Note",
  "number": "2.1.15",
  "title": "",
  "body": " Geometrically, the definition above says that you take the line containing (represented by ), and shift it so it passes through the endpoint of .   A line in -space defined by the position vector and a direction vector , illustrating the parametric form: .    "
},
{
  "id": "example-ch02-01-ex-5-5",
  "level": "2",
  "url": "sec-ch02-01-VectorValuedFunctions.html#example-ch02-01-ex-5-5",
  "type": "Example",
  "number": "2.1.16",
  "title": "",
  "body": "  Find both the vector equation and the parametric equations of the line through in the direction of the vector . Does the point lie on this line?    Using as the point on the line and as the direction vector, the vector equation of the line is and the parametric equations are   For the point to lie on the line, all three parametric equations must be satisfied by the same value of . From the first equation:   Checking this value in the other two equations:   Both match, so yes: the point lies on the line (it is reached at ).   "
},
{
  "id": "sec-ch02-01-VectorValuedFunctions-20",
  "level": "2",
  "url": "sec-ch02-01-VectorValuedFunctions.html#sec-ch02-01-VectorValuedFunctions-20",
  "type": "Remark",
  "number": "2.1.17",
  "title": "",
  "body": " Given a line , since represents the direction of the line, we can compare lines by comparing their direction vectors.  "
},
{
  "id": "example-ch02-01-ex-5-6",
  "level": "2",
  "url": "sec-ch02-01-VectorValuedFunctions.html#example-ch02-01-ex-5-6",
  "type": "Example",
  "number": "2.1.18",
  "title": "",
  "body": "  Determine whether the following pair of lines are parallel, intersect at a single point, or are skew. If they are parallel, determine whether they are the same line. If they intersect at a single point, determine the point of intersection.     The direction vectors are for the first line and for the second. If the lines were parallel there would be a scalar with ; comparing components gives , , and respectively, which is impossible. Hence the lines are not parallel (and in particular they are not the same line).  It remains to determine whether the lines intersect at a single point or are skew. An intersection point may be reached by each line at a different time, so we rename the parameter of the second line and look for values and with . Comparing components gives the system   The second equation of the system gives . Substituting into the first equation:   Since we only used the first two equations, we must check these values in the third: and , so the third equation is also satisfied. Hence the system is consistent and the lines intersect at the single point that is, at the point . (Indeed, as well.)   "
},
{
  "id": "sec-ch02-01-VectorValuedFunctions-22",
  "level": "2",
  "url": "sec-ch02-01-VectorValuedFunctions.html#sec-ch02-01-VectorValuedFunctions-22",
  "type": "Remark",
  "number": "2.1.19",
  "title": "Intersection of Curves.",
  "body": " Intersection of Curves  Assume there are two curves, and , parametrized by the same variable , with vector-valued functions and . The solutions of the equation are not simply the intersection points. They are the intersection points at which the two parametrizations arrive concurrently. For the intersection points one needs to solve , i.e. change one of the parameters.  "
},
{
  "id": "sec-ch02-02-ScalarValuedFunctions",
  "level": "1",
  "url": "sec-ch02-02-ScalarValuedFunctions.html",
  "type": "Section",
  "number": "2.2",
  "title": "Scalar-Valued Functions",
  "body": " Scalar-Valued Functions  In the section for vector-valued functions, we looked at functions with one input variable and multiple output variables (called curves).   The helix traced by the vector , for from 0 to 10, in -space.    In this section, we will look at functions of the form , having two input variables and one output variable (called surfaces).   The surface z equals the sine of, x plus y squared, in xyz-space.    The outputs of vector-valued functions were vectors. The outputs of scalar-valued functions are scalars (numbers).   Scalar-Valued Functions   A scalar-valued function of the form is a function whose domain (set of inputs) is a subset of the -plane ( ) and whose range (set of outputs) is a subset of the real line ( ).  The graph of is called a surface and consists of all points ( ) where is in the domain of .     A point (x, y, f(x,y)) on the graph of a scalar-valued function f.      Consider the graph of shown below. Determine whether the points and lie on the graph of .   The graph of f of x and y equals y squared minus x squared, as a surface in xyz-space.       A point lies on the graph of exactly when . For the first point: which matches the third coordinate, so lies on the graph of . For the second point: so does not lie on the graph of .     Given a function :     To find its domain, denoted , determine all that can be plugged into .    To find its range, denoted , determine all values of that have a pair mapped to it.       From OpenStax, Calculus Volume 3, Section 4.1   The domain and range of a scalar-valued function f(x,y), illustrating how inputs map to outputs.   The domain and range of a scalar-valued function , illustrating how inputs map to outputs.       Find the domain and range of the following functions:     Plane,     Paraboloid,     Upper Half of a Sphere with Radius 1,        Any pair can be plugged into , so , the entire -plane. For the range, fixing the outputs already take every real value as varies, so .    Again any pair can be plugged in, so . Since , no negative output is possible. The output 0 is attained at , and every is also attained, for instance at . Hence .    Here we need the expression under the square root to be non-negative: so is the disk of radius 1 centered at the origin (including its boundary circle). The square root is non-negative, and the outputs run from (attained on the boundary circle ) up to (attained at ), so .     The plane , the paraboloid and the upper half of a sphere of .    The plane f of x and y equals 4 x plus y minus 1, in xyz-space.     The paraboloid f of x and y equals x squared plus y squared, in xyz-space.     The upper half of the sphere f of x and y equals the square root of, 1 minus x squared minus y squared, in xyz-space.      Drag with the mouse to rotate the surfaces. You can open the plots in a new page from here: link to the left plot , link to the middle plot , link to the right plot     Planes in -space   A plane in -space is the set of all points that satisfy the equation , where , and are real numbers.     In order to find an equation for a plane, all we need is:     A point in the plane.    The orientation (tilt) of the plane.     The orientation is given by a vector orthogonal to every other vector in the plane. We call this vector a normal vector to the plane.   A plane in xyz-space with a normal vector n orthogonal to every vector in the plane.    Given a point on a plane and a vector normal to , the equation for is given by .    To find a vector normal to a plane , all you need is the cross-product of two non-parallel vectors in the plane (since they define the plane uniquely).     Find an equation for the plane that passes through the points , and .    To find an equation for the plane we need a point in the plane (we have three) and a normal vector, which we get as the cross product of two non-parallel vectors in the plane. Two vectors in the plane are and they are not parallel (no scalar multiple of can have a nonzero first component). Their cross product is normal to the plane: Using the point and the normal vector : As a check, all three points , , and satisfy the equation .     Normal Vector to a Plane  Given the plane , the vector is a normal vector to the plane.       Whether two planes are parallel, orthogonal, or neither, can be answered by asking the same question about their normal vectors.    If two planes are not parallel, they always intersect in a line. The direction of this line is given by the cross product of the normal vectors to the planes.       From OpenStax, Calculus Volume 3, Section 2.5   Two non-parallel planes intersecting in a line in xyz-space. The angle between the planes is the same as the angle that the normal vectors form.   Two non-parallel planes intersecting in a line in -space. The angle between the planes is the same as the angle that the normal vectors form.        Determine whether the planes given by and given by are parallel, orthogonal or neither.    The normal vectors are and , and we answer the question by asking it about them. If they were parallel there would be a scalar with ; the first components force while the second components force , so the normal vectors (and hence the planes) are not parallel. Checking orthogonality with the dot product: so the normal vectors are not orthogonal either. Hence the planes are neither parallel nor orthogonal.      Find an equation of the line where the planes and intersect where     The normal vectors are and , which are not scalar multiples of each other, so the planes are not parallel and they intersect in a line. The direction of this line is given by the cross product of the normal vectors: We also need a point on the line, that is, a point satisfying both plane equations. Subtracting the equation of from the equation of eliminates : Choosing gives , and then the equation of gives , so the point lies on both planes. Hence the line of intersection is As a check, substituting the parametric equations into both plane equations: and for every .    Consider the picture of Devil's Tower and a topographical map for it given below:   From OpenStax, Calculus Volume 3, Section 4.1   A photograph of Devils Tower and its topographical map, showing level curves at constant elevation.   A photograph of Devils Tower and its topographical map, showing level curves at constant elevation.     To get such a topographical map, you:     Think of Devil's Tower as a surface .    Intersect that surface with planes of the form (planes parallel to the -plane).     When you intersect a surface with a plane , you get a curve called a level curve, given by the equation . ( graph )       The paraboloid z equals x squared over 2 plus y squared over 4, intersected with the plane z equals 2.      The level curve obtained by intersecting z equals x squared over 2 plus y squared over 4 with the plane z equals 2.       You can minimize the side bar by clicking on the arrow icon. You can save a copy and create your own version of the graph by clicking on the \"Save\" button in the upper right corner of the graph. You can open in a new page from here: link to the left graph , link to the right graph     Describe the level curve you get when intersecting the cone  with the plane .   The cone z equals the square root of, 2 x squared plus 2 y squared, intersected with the plane z equals 1.       The level curve is defined by the equation . Squaring both sides: This is a circle centered at the origin of radius , drawn at height on the cone, as in the picture above.     Traces of Surfaces   When you intersect a surface with planes of the form , , and , the corresponding level curve is called a trace of the surface. Vertical trace refers to the intersection with a plane of the form or       Describe the vertical trace you get when intersecting the hyperbolic paraboloid with the plane .   The hyperbolic paraboloid z equals y squared minus x squared, intersected with the plane y equals 1, showing the vertical trace.       Substituting into the equation of the surface: The vertical trace is a downward-opening parabola lying in the plane , with vertex at the point and passing through the points , as the picture above shows.      From Knowledge Check: Which of the following show level curves of the function for different values of ?   Four candidate families of level curves, options (a) to (d).     Option a displays hyperbola-like lines      Option b displays parallel straight lines with slope not far from 1        Option c displays parallel straight lines with slope significantly greater than 1      Option d displays parallel straight lines with slope significantly smaller than 1        You can minimize the side bar by clicking on the arrow icon. You can save a copy and create your own version of the graph by clicking on the \"Save\" button in the upper right corner of the graph. You can open in a new page from here: link to the top left graph , link to the top right graph , link to the bottom left graph , link to the bottom right graph     Setting for a constant , the level curves are given by For every value of this is a straight line with slope exactly 1 (and -intercept ), so the level curves form a family of parallel lines of slope 1. Among the figures above, (a) shows hyperbola-like curves, while (c) and (d) show parallel lines that rise too fast or too slow for their slope to be equal to 1. Hence the answer is (b).     Suppose you have a function of the form , which corresponds to an object in 4 dimensions.  We can intersect this function with a hyperplane of the form to get a 3D-surface called a level surface defined by the equation .     Consider the function . Describe the level surface you get when intersecting with the hyperplane .    The level surface is defined by the equation This is an ellipsoid centered at the origin, crossing the -axis ( ) at , the -axis ( ) at , and the -axis ( ) at , as shown below.   The ellipsoid x squared plus 2 y squared plus 3 z squared equals 4.        Implicit vs. Explicit Surfaces  Consider the plane defined by . Since isn't by itself on one side of the equation, we say that is given implicitly as a function of and .  If you solve for and write as , then we say is given explicitly as a function of and .  The same definition of implicit or explicit applies for functions in higher dimensions.     For each of the following equations, determine whether is given implicitly or explicitly as a function of and . If is given implicitly, write it explicitly (if it isn't possible, explain why).      .     .     .       Since is by itself on one side of the equation, is given explicitly as a function of and .    Here appears on both sides of the equation and is not by itself, so is given implicitly. Solving for : so can be written explicitly.    Again is given implicitly. Attempting to solve for : It is not possible to write explicitly as a function of and : because of the , every input with corresponds to two different values of , so is not uniquely determined by and is therefore not a function of and .     "
},
{
  "id": "fig-ch02-02-helix",
  "level": "2",
  "url": "sec-ch02-02-ScalarValuedFunctions.html#fig-ch02-02-helix",
  "type": "Figure",
  "number": "2.2.1",
  "title": "",
  "body": " The helix traced by the vector , for from 0 to 10, in -space.   "
},
{
  "id": "fig-ch02-02-surface-sin",
  "level": "2",
  "url": "sec-ch02-02-ScalarValuedFunctions.html#fig-ch02-02-surface-sin",
  "type": "Figure",
  "number": "2.2.2",
  "title": "",
  "body": " The surface z equals the sine of, x plus y squared, in xyz-space.   "
},
{
  "id": "sec-ch02-02-ScalarValuedFunctions-7",
  "level": "2",
  "url": "sec-ch02-02-ScalarValuedFunctions.html#sec-ch02-02-ScalarValuedFunctions-7",
  "type": "Definition",
  "number": "2.2.1",
  "title": "Scalar-Valued Functions.",
  "body": " Scalar-Valued Functions   A scalar-valued function of the form is a function whose domain (set of inputs) is a subset of the -plane ( ) and whose range (set of outputs) is a subset of the real line ( ).  The graph of is called a surface and consists of all points ( ) where is in the domain of .   "
},
{
  "id": "fig-ch02-02-point-on-graph",
  "level": "2",
  "url": "sec-ch02-02-ScalarValuedFunctions.html#fig-ch02-02-point-on-graph",
  "type": "Figure",
  "number": "2.2.3",
  "title": "",
  "body": " A point (x, y, f(x,y)) on the graph of a scalar-valued function f.   "
},
{
  "id": "example-ch02-02-ex-6-1",
  "level": "2",
  "url": "sec-ch02-02-ScalarValuedFunctions.html#example-ch02-02-ex-6-1",
  "type": "Example",
  "number": "2.2.2",
  "title": "",
  "body": "  Consider the graph of shown below. Determine whether the points and lie on the graph of .   The graph of f of x and y equals y squared minus x squared, as a surface in xyz-space.       A point lies on the graph of exactly when . For the first point: which matches the third coordinate, so lies on the graph of . For the second point: so does not lie on the graph of .   "
},
{
  "id": "sec-ch02-02-ScalarValuedFunctions-10",
  "level": "2",
  "url": "sec-ch02-02-ScalarValuedFunctions.html#sec-ch02-02-ScalarValuedFunctions-10",
  "type": "Note",
  "number": "2.2.3",
  "title": "",
  "body": " Given a function :     To find its domain, denoted , determine all that can be plugged into .    To find its range, denoted , determine all values of that have a pair mapped to it.     "
},
{
  "id": "fig-ch02-02-domain-range",
  "level": "2",
  "url": "sec-ch02-02-ScalarValuedFunctions.html#fig-ch02-02-domain-range",
  "type": "Figure",
  "number": "2.2.5",
  "title": "",
  "body": " From OpenStax, Calculus Volume 3, Section 4.1   The domain and range of a scalar-valued function f(x,y), illustrating how inputs map to outputs.   The domain and range of a scalar-valued function , illustrating how inputs map to outputs.    "
},
{
  "id": "example-ch02-02-ex-6-2",
  "level": "2",
  "url": "sec-ch02-02-ScalarValuedFunctions.html#example-ch02-02-ex-6-2",
  "type": "Example",
  "number": "2.2.4",
  "title": "",
  "body": "  Find the domain and range of the following functions:     Plane,     Paraboloid,     Upper Half of a Sphere with Radius 1,        Any pair can be plugged into , so , the entire -plane. For the range, fixing the outputs already take every real value as varies, so .    Again any pair can be plugged in, so . Since , no negative output is possible. The output 0 is attained at , and every is also attained, for instance at . Hence .    Here we need the expression under the square root to be non-negative: so is the disk of radius 1 centered at the origin (including its boundary circle). The square root is non-negative, and the outputs run from (attained on the boundary circle ) up to (attained at ), so .   "
},
{
  "id": "fig-ch02-02-ex-6-2",
  "level": "2",
  "url": "sec-ch02-02-ScalarValuedFunctions.html#fig-ch02-02-ex-6-2",
  "type": "Figure",
  "number": "2.2.6",
  "title": "",
  "body": " The plane , the paraboloid and the upper half of a sphere of .    The plane f of x and y equals 4 x plus y minus 1, in xyz-space.     The paraboloid f of x and y equals x squared plus y squared, in xyz-space.     The upper half of the sphere f of x and y equals the square root of, 1 minus x squared minus y squared, in xyz-space.     "
},
{
  "id": "sec-ch02-02-ScalarValuedFunctions-15",
  "level": "2",
  "url": "sec-ch02-02-ScalarValuedFunctions.html#sec-ch02-02-ScalarValuedFunctions-15",
  "type": "Definition",
  "number": "2.2.5",
  "title": "Planes in <span class=\"process-math\">\\(x y z\\)<\/span>-space.",
  "body": " Planes in -space   A plane in -space is the set of all points that satisfy the equation , where , and are real numbers.   "
},
{
  "id": "sec-ch02-02-ScalarValuedFunctions-16",
  "level": "2",
  "url": "sec-ch02-02-ScalarValuedFunctions.html#sec-ch02-02-ScalarValuedFunctions-16",
  "type": "Remark",
  "number": "2.2.6",
  "title": "",
  "body": " In order to find an equation for a plane, all we need is:     A point in the plane.    The orientation (tilt) of the plane.     The orientation is given by a vector orthogonal to every other vector in the plane. We call this vector a normal vector to the plane.   A plane in xyz-space with a normal vector n orthogonal to every vector in the plane.    Given a point on a plane and a vector normal to , the equation for is given by .  "
},
{
  "id": "sec-ch02-02-ScalarValuedFunctions-17",
  "level": "2",
  "url": "sec-ch02-02-ScalarValuedFunctions.html#sec-ch02-02-ScalarValuedFunctions-17",
  "type": "Note",
  "number": "2.2.7",
  "title": "",
  "body": " To find a vector normal to a plane , all you need is the cross-product of two non-parallel vectors in the plane (since they define the plane uniquely).  "
},
{
  "id": "example-ch02-02-ex-6-3",
  "level": "2",
  "url": "sec-ch02-02-ScalarValuedFunctions.html#example-ch02-02-ex-6-3",
  "type": "Example",
  "number": "2.2.8",
  "title": "",
  "body": "  Find an equation for the plane that passes through the points , and .    To find an equation for the plane we need a point in the plane (we have three) and a normal vector, which we get as the cross product of two non-parallel vectors in the plane. Two vectors in the plane are and they are not parallel (no scalar multiple of can have a nonzero first component). Their cross product is normal to the plane: Using the point and the normal vector : As a check, all three points , , and satisfy the equation .   "
},
{
  "id": "sec-ch02-02-ScalarValuedFunctions-19",
  "level": "2",
  "url": "sec-ch02-02-ScalarValuedFunctions.html#sec-ch02-02-ScalarValuedFunctions-19",
  "type": "Remark",
  "number": "2.2.9",
  "title": "Normal Vector to a Plane.",
  "body": " Normal Vector to a Plane  Given the plane , the vector is a normal vector to the plane.  "
},
{
  "id": "sec-ch02-02-ScalarValuedFunctions-20",
  "level": "2",
  "url": "sec-ch02-02-ScalarValuedFunctions.html#sec-ch02-02-ScalarValuedFunctions-20",
  "type": "Note",
  "number": "2.2.10",
  "title": "",
  "body": "    Whether two planes are parallel, orthogonal, or neither, can be answered by asking the same question about their normal vectors.    If two planes are not parallel, they always intersect in a line. The direction of this line is given by the cross product of the normal vectors to the planes.     "
},
{
  "id": "fig-ch02-02-intersecting-planes",
  "level": "2",
  "url": "sec-ch02-02-ScalarValuedFunctions.html#fig-ch02-02-intersecting-planes",
  "type": "Figure",
  "number": "2.2.8",
  "title": "",
  "body": " From OpenStax, Calculus Volume 3, Section 2.5   Two non-parallel planes intersecting in a line in xyz-space. The angle between the planes is the same as the angle that the normal vectors form.   Two non-parallel planes intersecting in a line in -space. The angle between the planes is the same as the angle that the normal vectors form.    "
},
{
  "id": "example-ch02-02-ex-6-4",
  "level": "2",
  "url": "sec-ch02-02-ScalarValuedFunctions.html#example-ch02-02-ex-6-4",
  "type": "Example",
  "number": "2.2.11",
  "title": "",
  "body": "  Determine whether the planes given by and given by are parallel, orthogonal or neither.    The normal vectors are and , and we answer the question by asking it about them. If they were parallel there would be a scalar with ; the first components force while the second components force , so the normal vectors (and hence the planes) are not parallel. Checking orthogonality with the dot product: so the normal vectors are not orthogonal either. Hence the planes are neither parallel nor orthogonal.   "
},
{
  "id": "example-ch02-02-ex-6-5",
  "level": "2",
  "url": "sec-ch02-02-ScalarValuedFunctions.html#example-ch02-02-ex-6-5",
  "type": "Example",
  "number": "2.2.12",
  "title": "",
  "body": "  Find an equation of the line where the planes and intersect where     The normal vectors are and , which are not scalar multiples of each other, so the planes are not parallel and they intersect in a line. The direction of this line is given by the cross product of the normal vectors: We also need a point on the line, that is, a point satisfying both plane equations. Subtracting the equation of from the equation of eliminates : Choosing gives , and then the equation of gives , so the point lies on both planes. Hence the line of intersection is As a check, substituting the parametric equations into both plane equations: and for every .   "
},
{
  "id": "fig-ch02-02-devils-tower",
  "level": "2",
  "url": "sec-ch02-02-ScalarValuedFunctions.html#fig-ch02-02-devils-tower",
  "type": "Figure",
  "number": "2.2.9",
  "title": "",
  "body": " From OpenStax, Calculus Volume 3, Section 4.1   A photograph of Devils Tower and its topographical map, showing level curves at constant elevation.   A photograph of Devils Tower and its topographical map, showing level curves at constant elevation.    "
},
{
  "id": "fig-ch02-02-level-curve",
  "level": "2",
  "url": "sec-ch02-02-ScalarValuedFunctions.html#fig-ch02-02-level-curve",
  "type": "Figure",
  "number": "2.2.10",
  "title": "",
  "body": "    The paraboloid z equals x squared over 2 plus y squared over 4, intersected with the plane z equals 2.      The level curve obtained by intersecting z equals x squared over 2 plus y squared over 4 with the plane z equals 2.      "
},
{
  "id": "example-ch02-02-ex-6-6",
  "level": "2",
  "url": "sec-ch02-02-ScalarValuedFunctions.html#example-ch02-02-ex-6-6",
  "type": "Example",
  "number": "2.2.13",
  "title": "",
  "body": "  Describe the level curve you get when intersecting the cone  with the plane .   The cone z equals the square root of, 2 x squared plus 2 y squared, intersected with the plane z equals 1.       The level curve is defined by the equation . Squaring both sides: This is a circle centered at the origin of radius , drawn at height on the cone, as in the picture above.   "
},
{
  "id": "sec-ch02-02-ScalarValuedFunctions-32",
  "level": "2",
  "url": "sec-ch02-02-ScalarValuedFunctions.html#sec-ch02-02-ScalarValuedFunctions-32",
  "type": "Definition",
  "number": "2.2.14",
  "title": "Traces of Surfaces.",
  "body": " Traces of Surfaces   When you intersect a surface with planes of the form , , and , the corresponding level curve is called a trace of the surface. Vertical trace refers to the intersection with a plane of the form or    "
},
{
  "id": "example-ch02-02-ex-6-7",
  "level": "2",
  "url": "sec-ch02-02-ScalarValuedFunctions.html#example-ch02-02-ex-6-7",
  "type": "Example",
  "number": "2.2.15",
  "title": "",
  "body": "  Describe the vertical trace you get when intersecting the hyperbolic paraboloid with the plane .   The hyperbolic paraboloid z equals y squared minus x squared, intersected with the plane y equals 1, showing the vertical trace.       Substituting into the equation of the surface: The vertical trace is a downward-opening parabola lying in the plane , with vertex at the point and passing through the points , as the picture above shows.   "
},
{
  "id": "example-ch02-02-ex-6-8",
  "level": "2",
  "url": "sec-ch02-02-ScalarValuedFunctions.html#example-ch02-02-ex-6-8",
  "type": "Example",
  "number": "2.2.16",
  "title": "",
  "body": "  From Knowledge Check: Which of the following show level curves of the function for different values of ?   Four candidate families of level curves, options (a) to (d).     Option a displays hyperbola-like lines      Option b displays parallel straight lines with slope not far from 1        Option c displays parallel straight lines with slope significantly greater than 1      Option d displays parallel straight lines with slope significantly smaller than 1        You can minimize the side bar by clicking on the arrow icon. You can save a copy and create your own version of the graph by clicking on the \"Save\" button in the upper right corner of the graph. You can open in a new page from here: link to the top left graph , link to the top right graph , link to the bottom left graph , link to the bottom right graph     Setting for a constant , the level curves are given by For every value of this is a straight line with slope exactly 1 (and -intercept ), so the level curves form a family of parallel lines of slope 1. Among the figures above, (a) shows hyperbola-like curves, while (c) and (d) show parallel lines that rise too fast or too slow for their slope to be equal to 1. Hence the answer is (b).   "
},
{
  "id": "sec-ch02-02-ScalarValuedFunctions-35",
  "level": "2",
  "url": "sec-ch02-02-ScalarValuedFunctions.html#sec-ch02-02-ScalarValuedFunctions-35",
  "type": "Remark",
  "number": "2.2.17",
  "title": "",
  "body": " Suppose you have a function of the form , which corresponds to an object in 4 dimensions.  We can intersect this function with a hyperplane of the form to get a 3D-surface called a level surface defined by the equation .  "
},
{
  "id": "example-ch02-02-ex-6-9",
  "level": "2",
  "url": "sec-ch02-02-ScalarValuedFunctions.html#example-ch02-02-ex-6-9",
  "type": "Example",
  "number": "2.2.18",
  "title": "",
  "body": "  Consider the function . Describe the level surface you get when intersecting with the hyperplane .    The level surface is defined by the equation This is an ellipsoid centered at the origin, crossing the -axis ( ) at , the -axis ( ) at , and the -axis ( ) at , as shown below.   The ellipsoid x squared plus 2 y squared plus 3 z squared equals 4.      "
},
{
  "id": "sec-ch02-02-ScalarValuedFunctions-37",
  "level": "2",
  "url": "sec-ch02-02-ScalarValuedFunctions.html#sec-ch02-02-ScalarValuedFunctions-37",
  "type": "Note",
  "number": "2.2.19",
  "title": "Implicit vs. Explicit Surfaces.",
  "body": " Implicit vs. Explicit Surfaces  Consider the plane defined by . Since isn't by itself on one side of the equation, we say that is given implicitly as a function of and .  If you solve for and write as , then we say is given explicitly as a function of and .  The same definition of implicit or explicit applies for functions in higher dimensions.  "
},
{
  "id": "example-ch02-02-ex-6-10",
  "level": "2",
  "url": "sec-ch02-02-ScalarValuedFunctions.html#example-ch02-02-ex-6-10",
  "type": "Example",
  "number": "2.2.20",
  "title": "",
  "body": "  For each of the following equations, determine whether is given implicitly or explicitly as a function of and . If is given implicitly, write it explicitly (if it isn't possible, explain why).      .     .     .       Since is by itself on one side of the equation, is given explicitly as a function of and .    Here appears on both sides of the equation and is not by itself, so is given implicitly. Solving for : so can be written explicitly.    Again is given implicitly. Attempting to solve for : It is not possible to write explicitly as a function of and : because of the , every input with corresponds to two different values of , so is not uniquely determined by and is therefore not a function of and .   "
},
{
  "id": "sec-ch03-01-DerivativesVectorValuedFunctions",
  "level": "1",
  "url": "sec-ch03-01-DerivativesVectorValuedFunctions.html",
  "type": "Section",
  "number": "3.1",
  "title": "Derivatives of Vector-Valued Functions",
  "body": " Derivatives of Vector-Valued Functions   Given a vector-valued function , we learned that for a specific value tells you the location of a particle travelling along the graph of at time .  What if we want to know how fast and in what direction is the particle travelling at a given time? We can answer these questions using differentiation.    Theoretical Definition of the Derivative   Given a vector-valued function , defined on some open interval, its derivative at is defined as         Since is defined as a limit, it might not exist.    To evaluate a limit of a vector-valued function, you evaluate the limit in each component.        Given the function find:  (a) .  (b) .    We use the definition of the derivative, evaluating the limit in each component: In the first component, expanding : In the second component: Hence .    Evaluating the derivative from part (a) at :      In Calculus I, represents (geometrically) a limit of secant lines approaching a tangent line. Similarly, represents (geometrically) a limit of secant vectors approaching a tangent vector.    From LibreTexts: Calculus, Section 12.2   A curve in xyz-space with two position vectors drawn from the origin to points on the curve: vector r of t, and vector r of, t plus delta t, at a point further along the curve.   A curve in -space with two position vectors drawn from the origin to points on the curve: , and , at a point further along the curve.        Computational Definition of the Derivative   Consider a vector-valued function . If , and are all differentiable on the -interval ( ), then is differentiable on the -interval ( ), and its derivative is given by the vector-valued function .      Let .  (a) On what interval is differentiable?  (b) Compute .    By the computational definition, is differentiable wherever all three components are differentiable. The components and are differentiable for every . The component is defined and differentiable when the input of the logarithm is positive: Hence is differentiable on the intervals and .    Differentiating each component (using the single-variable chain rule in the first and third): Since , the function is differentiable at , and we can evaluate:      Properties of Derivatives of Vector-Valued Functions  Let and be differentiable vector-valued functions and let be a differentiable scalar-valued function, all at the input . Then     Constant Rule: for any constant vector .    Sum Rule:     Chain Rule:     Dot Product Rule:     Cross Product Rule:        Notation for the Chain Rule:     When evaluating a derivative of the form , if , then .    If , interpret as take the derivative of with respect to , then replace all 's with .         Given , compute .    We use the Chain Rule with . First, Following the note above, means we replace all 's in with : Since , the Chain Rule gives       Given a curve , the vector is called the tangent vector to the curve at , and is usually plotted with starting point at .    Below is the graph of , with plotted every units of time.   The position vector r of t with coordinates x = 3 cosine of t, y = 5 cosine of t over 2, z = sine of t, tracing a figure eight, with a tangent vector shown at a point on the curve.      We define the unit tangent vector to the graph of at as       Given , find:  (a) The tangent vector to the graph of at the point .  (b) The unit tangent vector to the graph of for arbitrary .   The curve traced by the vector r of t with coordinates x = the square root of t, y = the natural log of t.       First we find the -value corresponding to the point : we need and , and both equations give . Differentiating componentwise: so the tangent vector at the point is     For the magnitude of is Hence the unit tangent vector is As a check, , so is indeed a unit vector.       Velocity and Acceleration Vectors  Given a differentiable curve , the vector has an important physical interpretation:      gives the speed of a particle traveling on at .     gives the direction of motion of a particle traveling on at .       Velocity and Acceleration Vectors   Suppose is a twice differentiable function representing the position of a particle at time . Then      is the velocity vector of the particle at time .     is the acceleration vector of the particle at time .         Suppose that the position of a particle is given by , . Find:  (a) The velocity vector of the particle at .  (b) The speed of the particle at .  (c) The direction of motion of the particle at time .    Differentiating componentwise, the velocity vector at time is so at      The speed is the magnitude of the velocity vector:     The direction of motion is the unit vector in the direction of the velocity vector:       Using the parametrization of the unit circle , , find all points on the unit circle at which its tangent vector is orthogonal to .    The tangent vector is . Checking orthogonality with the dot product: The dot product equals 0 for every value of , so the tangent vector is orthogonal to at every point of the unit circle. This matches the geometric fact that a tangent line to a circle is always perpendicular to the radius drawn to the point of tangency and here is exactly that radius.    "
},
{
  "id": "sec-ch03-01-DerivativesVectorValuedFunctions-2",
  "level": "2",
  "url": "sec-ch03-01-DerivativesVectorValuedFunctions.html#sec-ch03-01-DerivativesVectorValuedFunctions-2",
  "type": "Note",
  "number": "3.1.1",
  "title": "",
  "body": " Given a vector-valued function , we learned that for a specific value tells you the location of a particle travelling along the graph of at time .  What if we want to know how fast and in what direction is the particle travelling at a given time? We can answer these questions using differentiation.  "
},
{
  "id": "sec-ch03-01-DerivativesVectorValuedFunctions-3",
  "level": "2",
  "url": "sec-ch03-01-DerivativesVectorValuedFunctions.html#sec-ch03-01-DerivativesVectorValuedFunctions-3",
  "type": "Definition",
  "number": "3.1.2",
  "title": "Theoretical Definition of the Derivative.",
  "body": " Theoretical Definition of the Derivative   Given a vector-valued function , defined on some open interval, its derivative at is defined as    "
},
{
  "id": "sec-ch03-01-DerivativesVectorValuedFunctions-4",
  "level": "2",
  "url": "sec-ch03-01-DerivativesVectorValuedFunctions.html#sec-ch03-01-DerivativesVectorValuedFunctions-4",
  "type": "Remark",
  "number": "3.1.3",
  "title": "",
  "body": "    Since is defined as a limit, it might not exist.    To evaluate a limit of a vector-valued function, you evaluate the limit in each component.     "
},
{
  "id": "example-ch03-01-ex-7-1",
  "level": "2",
  "url": "sec-ch03-01-DerivativesVectorValuedFunctions.html#example-ch03-01-ex-7-1",
  "type": "Example",
  "number": "3.1.4",
  "title": "",
  "body": "  Given the function find:  (a) .  (b) .    We use the definition of the derivative, evaluating the limit in each component: In the first component, expanding : In the second component: Hence .    Evaluating the derivative from part (a) at :    "
},
{
  "id": "sec-ch03-01-DerivativesVectorValuedFunctions-6",
  "level": "2",
  "url": "sec-ch03-01-DerivativesVectorValuedFunctions.html#sec-ch03-01-DerivativesVectorValuedFunctions-6",
  "type": "Remark",
  "number": "3.1.5",
  "title": "",
  "body": " In Calculus I, represents (geometrically) a limit of secant lines approaching a tangent line. Similarly, represents (geometrically) a limit of secant vectors approaching a tangent vector.  "
},
{
  "id": "fig-ch03-01-secant-vectors",
  "level": "2",
  "url": "sec-ch03-01-DerivativesVectorValuedFunctions.html#fig-ch03-01-secant-vectors",
  "type": "Figure",
  "number": "3.1.1",
  "title": "",
  "body": " From LibreTexts: Calculus, Section 12.2   A curve in xyz-space with two position vectors drawn from the origin to points on the curve: vector r of t, and vector r of, t plus delta t, at a point further along the curve.   A curve in -space with two position vectors drawn from the origin to points on the curve: , and , at a point further along the curve.    "
},
{
  "id": "sec-ch03-01-DerivativesVectorValuedFunctions-8",
  "level": "2",
  "url": "sec-ch03-01-DerivativesVectorValuedFunctions.html#sec-ch03-01-DerivativesVectorValuedFunctions-8",
  "type": "Definition",
  "number": "3.1.6",
  "title": "Computational Definition of the Derivative.",
  "body": " Computational Definition of the Derivative   Consider a vector-valued function . If , and are all differentiable on the -interval ( ), then is differentiable on the -interval ( ), and its derivative is given by the vector-valued function .   "
},
{
  "id": "example-ch03-01-ex-7-2",
  "level": "2",
  "url": "sec-ch03-01-DerivativesVectorValuedFunctions.html#example-ch03-01-ex-7-2",
  "type": "Example",
  "number": "3.1.7",
  "title": "",
  "body": "  Let .  (a) On what interval is differentiable?  (b) Compute .    By the computational definition, is differentiable wherever all three components are differentiable. The components and are differentiable for every . The component is defined and differentiable when the input of the logarithm is positive: Hence is differentiable on the intervals and .    Differentiating each component (using the single-variable chain rule in the first and third): Since , the function is differentiable at , and we can evaluate:    "
},
{
  "id": "sec-ch03-01-DerivativesVectorValuedFunctions-10",
  "level": "2",
  "url": "sec-ch03-01-DerivativesVectorValuedFunctions.html#sec-ch03-01-DerivativesVectorValuedFunctions-10",
  "type": "Remark",
  "number": "3.1.8",
  "title": "Properties of Derivatives of Vector-Valued Functions.",
  "body": " Properties of Derivatives of Vector-Valued Functions  Let and be differentiable vector-valued functions and let be a differentiable scalar-valued function, all at the input . Then     Constant Rule: for any constant vector .    Sum Rule:     Chain Rule:     Dot Product Rule:     Cross Product Rule:      "
},
{
  "id": "sec-ch03-01-DerivativesVectorValuedFunctions-11",
  "level": "2",
  "url": "sec-ch03-01-DerivativesVectorValuedFunctions.html#sec-ch03-01-DerivativesVectorValuedFunctions-11",
  "type": "Note",
  "number": "3.1.9",
  "title": "Notation for the Chain Rule:.",
  "body": " Notation for the Chain Rule:     When evaluating a derivative of the form , if , then .    If , interpret as take the derivative of with respect to , then replace all 's with .      "
},
{
  "id": "example-ch03-01-ex-7-3",
  "level": "2",
  "url": "sec-ch03-01-DerivativesVectorValuedFunctions.html#example-ch03-01-ex-7-3",
  "type": "Example",
  "number": "3.1.10",
  "title": "",
  "body": "  Given , compute .    We use the Chain Rule with . First, Following the note above, means we replace all 's in with : Since , the Chain Rule gives    "
},
{
  "id": "sec-ch03-01-DerivativesVectorValuedFunctions-13",
  "level": "2",
  "url": "sec-ch03-01-DerivativesVectorValuedFunctions.html#sec-ch03-01-DerivativesVectorValuedFunctions-13",
  "type": "Definition",
  "number": "3.1.11",
  "title": "",
  "body": "  Given a curve , the vector is called the tangent vector to the curve at , and is usually plotted with starting point at .   "
},
{
  "id": "fig-ch03-01-tangent-vectors",
  "level": "2",
  "url": "sec-ch03-01-DerivativesVectorValuedFunctions.html#fig-ch03-01-tangent-vectors",
  "type": "Figure",
  "number": "3.1.2",
  "title": "",
  "body": " The position vector r of t with coordinates x = 3 cosine of t, y = 5 cosine of t over 2, z = sine of t, tracing a figure eight, with a tangent vector shown at a point on the curve.   "
},
{
  "id": "sec-ch03-01-DerivativesVectorValuedFunctions-16",
  "level": "2",
  "url": "sec-ch03-01-DerivativesVectorValuedFunctions.html#sec-ch03-01-DerivativesVectorValuedFunctions-16",
  "type": "Definition",
  "number": "3.1.12",
  "title": "",
  "body": "  We define the unit tangent vector to the graph of at as    "
},
{
  "id": "example-ch03-01-ex-7-4",
  "level": "2",
  "url": "sec-ch03-01-DerivativesVectorValuedFunctions.html#example-ch03-01-ex-7-4",
  "type": "Example",
  "number": "3.1.13",
  "title": "",
  "body": "  Given , find:  (a) The tangent vector to the graph of at the point .  (b) The unit tangent vector to the graph of for arbitrary .   The curve traced by the vector r of t with coordinates x = the square root of t, y = the natural log of t.       First we find the -value corresponding to the point : we need and , and both equations give . Differentiating componentwise: so the tangent vector at the point is     For the magnitude of is Hence the unit tangent vector is As a check, , so is indeed a unit vector.   "
},
{
  "id": "sec-ch03-01-DerivativesVectorValuedFunctions-18",
  "level": "2",
  "url": "sec-ch03-01-DerivativesVectorValuedFunctions.html#sec-ch03-01-DerivativesVectorValuedFunctions-18",
  "type": "Note",
  "number": "3.1.14",
  "title": "Velocity and Acceleration Vectors.",
  "body": " Velocity and Acceleration Vectors  Given a differentiable curve , the vector has an important physical interpretation:      gives the speed of a particle traveling on at .     gives the direction of motion of a particle traveling on at .     "
},
{
  "id": "sec-ch03-01-DerivativesVectorValuedFunctions-19",
  "level": "2",
  "url": "sec-ch03-01-DerivativesVectorValuedFunctions.html#sec-ch03-01-DerivativesVectorValuedFunctions-19",
  "type": "Definition",
  "number": "3.1.15",
  "title": "Velocity and Acceleration Vectors.",
  "body": " Velocity and Acceleration Vectors   Suppose is a twice differentiable function representing the position of a particle at time . Then      is the velocity vector of the particle at time .     is the acceleration vector of the particle at time .      "
},
{
  "id": "example-ch03-01-ex-7-5",
  "level": "2",
  "url": "sec-ch03-01-DerivativesVectorValuedFunctions.html#example-ch03-01-ex-7-5",
  "type": "Example",
  "number": "3.1.16",
  "title": "",
  "body": "  Suppose that the position of a particle is given by , . Find:  (a) The velocity vector of the particle at .  (b) The speed of the particle at .  (c) The direction of motion of the particle at time .    Differentiating componentwise, the velocity vector at time is so at      The speed is the magnitude of the velocity vector:     The direction of motion is the unit vector in the direction of the velocity vector:    "
},
{
  "id": "example-ch03-01-ex-7-6",
  "level": "2",
  "url": "sec-ch03-01-DerivativesVectorValuedFunctions.html#example-ch03-01-ex-7-6",
  "type": "Example",
  "number": "3.1.17",
  "title": "",
  "body": "  Using the parametrization of the unit circle , , find all points on the unit circle at which its tangent vector is orthogonal to .    The tangent vector is . Checking orthogonality with the dot product: The dot product equals 0 for every value of , so the tangent vector is orthogonal to at every point of the unit circle. This matches the geometric fact that a tangent line to a circle is always perpendicular to the radius drawn to the point of tangency and here is exactly that radius.   "
},
{
  "id": "sec-ch03-02-PartialDerivatives",
  "level": "1",
  "url": "sec-ch03-02-PartialDerivatives.html",
  "type": "Section",
  "number": "3.2",
  "title": "Partial Derivatives of Scalar-Valued Functions",
  "body": " Partial Derivatives of Scalar-Valued Functions   Defining the derivative of a vector-valued function was simple because we only had one input variable (as in Calculus I).  If we want to define a similar concept for functions of the form , we can do it by remembering that derivatives represent rates of change.    Given a function , we know that represents:     The slope of the tangent line to the graph of at the point .    The rate of change of at in the direction of the positive -axis.      The curve y equals f of x, and its tangent line at x equals a.      Above we see the graph of (red) and its tangent line at (blue).  We build up on this definition and define the rate of change of , at the input ( ), in the direction of the positive -axis, as .  Note that the change is happening in the -coordinate, and we leave the coordinate unchanged.     Find the rate of change of , at the input , in the direction of the positive -axis.    The rate of change of at the input in the direction of the positive -axis is found just like the rate of change in the direction of the positive -axis, except now the change happens in the -coordinate and we leave the -coordinate unchanged. Using the corresponding limit: So at the input , the function increases at a rate of 2 units per unit of change in .     Since in our definition of , the -coordinate is kept constant at , we can interpret this geometrically as intersecting the surface with the plane to get the level curve .     Suppose we have the surface and that we want to compute . Below is a picture of this surface intersected with the plane .   A cross-section of z equals f of x and y, parallel to the xz-plane at y equals b, showing the partial derivative with respect to x at x equals a.     When we compute , geometrically, we are computing the slope of the tangent line to the curve at the input , as shown below:   The trace y equals b, and the tangent line of the trace at x equals a.      Above we see the curve and the tangent line at     We summarize all of this information below.   Partial Derivative with Respect to   Given a scalar-valued function , its partial derivative with respect to at the input (or at the point is defined as .  We interpret as:     The slope of the tangent line to the curve at the point .    The rate of change of at the input in the direction of the positive -axis.        We have a similar definition for with a similar geometric interpretation.    Partial Derivative with Respect to   Given a scalar-valued function , its partial derivative with respect to at the input (or at the point is defined as   We interpret as:     The slope of the tangent line to the curve at the point .    The rate of change of at the input in the direction of the positive -axis.        The curve and the tangent line at ( )    A cross-section of z equals f of x and y, parallel to the yz-plane at x equals a.      The trace x equals a, and the tangent line of the trace at y equals b.       The graphs above show only the plots; you can drag and zoom them. To see the expressions behind them, or to save a copy and create your own version of the graphs, open them in a new page from here: link to the left graph , link to the right graph    It is important we use proper notation when working with partial derivatives. Make sure to use the partial symbol and always refer to it as a partial derivative (not just a derivative).    Computing Partial Derivatives  As is expected, we don't need to use limits every time we want to compute partial derivatives.    Partial Derivatives (Computational)   Given a scalar-valued function , to compute , take (algorithmically) the usual derivative of with respect to whilst treating the variable as a constant. (Similarly for ).      Given , compute  (a) .  (b) .    Treating as a constant, the term contains no at all, so from the point of view of it is just a fixed number (for example, if were held at , then , a constant). The derivative of any constant is 0, so . The term does depend on and is differentiated using the (single-variable) chain rule, treating as a constant. Putting the two pieces together:     Treating as a constant, both terms now depend on :       Given , compute  (a) .  (b) .    Treating as a constant and using the chain rule with outer function :     Treating as a constant:       Consider the Cobb-Douglas Production function (L=labor, K = capital):   1)Find the marginal productivity of labor and marginal productivity of capital when 20 units of labor and 10 units of capital are invested.  2) For this value of is this Cobb-Douglas Production function an increasing or decreasing function of   3) For this value of is this Cobb-Douglas Production function an increasing or decreasing function of     The marginal productivity of labor is the partial derivative and the marginal productivity of capital is the partial derivative . Treating and as constants respectively: Evaluating at the input : So at this investment level, one additional unit of labor increases production by approximately 8.40 units, while one additional unit of capital increases production by approximately 1.87 units.    The rate of change of with respect to is , which for is for every (in particular ). Since the partial derivative with respect to is positive, the production function is an increasing function of .    The rate of change of with respect to is , which for is for every (in particular ). Since the partial derivative with respect to is positive, the production function is an increasing function of .      Given , what would be the approximate effect on of increasing from 2 to 3 while keeping fixed at 25 units? What about decreasing from 25 to 24 units while keeping fixed at 2 units?    For the first change we keep fixed at 25 and increase by , so we use the approximation . Treating as a constant, , so and the approximate effect is an increase of about 60 units in . For the second change we keep fixed at 2 and decrease by , so we use . Treating as a constant, , so and the approximate effect is a decrease of about 0.8 units in .     Differentiability  We can talk about a function being differentiable at an input . However, it isn't as easy as just saying that and exist.    Differentiability   A function is differentiable at the input provided that and exist and that where approaches 0 as approaches and approaches .     Geometrically, this means that is differentiable at the input if as you zoom into the point ( ), the graph of looks like a plane (is smooth).     Consider the surface    You can verify that (they exist), but is not differentiable at .    We first verify that both partial derivatives exist at using the limit definitions. Along the -axis ( ) the function is for every , so and similarly along the -axis ( ) we have , so . Both partial derivatives exist.  Now suppose were differentiable at . Then the error term would have to approach 0 as approaches 0 and approaches 0. But if we approach the origin along the line , then for every  which does not approach 0. Hence is not differentiable at . This matches the picture below: no matter how far we zoom in at the origin, the graph never flattens out to look like a plane.     A surface z equals f of x and y, from example 8.7      As with traditional derivatives, you can compute partial derivatives multiple times (even with respect to different variables).    Second-Order Partial Derivatives  Below is a list of the four second-order partial derivatives of a function and how we represent them symbolically:      Find all four second-order partial derivatives of .    We first compute the two first-order partial derivatives, treating and as constants respectively: Differentiating each of these once more, with respect to each variable: Note that the two mixed partial derivatives are equal, , as expected since both are continuous functions (wherever , which is the domain of ).     Note that in , . This isn't always the case, but it is the case if and are continuous functions.   "
},
{
  "id": "sec-ch03-02-PartialDerivatives-2",
  "level": "2",
  "url": "sec-ch03-02-PartialDerivatives.html#sec-ch03-02-PartialDerivatives-2",
  "type": "Note",
  "number": "3.2.1",
  "title": "",
  "body": " Defining the derivative of a vector-valued function was simple because we only had one input variable (as in Calculus I).  If we want to define a similar concept for functions of the form , we can do it by remembering that derivatives represent rates of change.  "
},
{
  "id": "sec-ch03-02-PartialDerivatives-3",
  "level": "2",
  "url": "sec-ch03-02-PartialDerivatives.html#sec-ch03-02-PartialDerivatives-3",
  "type": "Remark",
  "number": "3.2.2",
  "title": "",
  "body": " Given a function , we know that represents:     The slope of the tangent line to the graph of at the point .    The rate of change of at in the direction of the positive -axis.      The curve y equals f of x, and its tangent line at x equals a.      Above we see the graph of (red) and its tangent line at (blue).  We build up on this definition and define the rate of change of , at the input ( ), in the direction of the positive -axis, as .  Note that the change is happening in the -coordinate, and we leave the coordinate unchanged.  "
},
{
  "id": "example-ch03-02-ex-8-1",
  "level": "2",
  "url": "sec-ch03-02-PartialDerivatives.html#example-ch03-02-ex-8-1",
  "type": "Example",
  "number": "3.2.3",
  "title": "",
  "body": "  Find the rate of change of , at the input , in the direction of the positive -axis.    The rate of change of at the input in the direction of the positive -axis is found just like the rate of change in the direction of the positive -axis, except now the change happens in the -coordinate and we leave the -coordinate unchanged. Using the corresponding limit: So at the input , the function increases at a rate of 2 units per unit of change in .   "
},
{
  "id": "sec-ch03-02-PartialDerivatives-5",
  "level": "2",
  "url": "sec-ch03-02-PartialDerivatives.html#sec-ch03-02-PartialDerivatives-5",
  "type": "Note",
  "number": "3.2.4",
  "title": "",
  "body": " Since in our definition of , the -coordinate is kept constant at , we can interpret this geometrically as intersecting the surface with the plane to get the level curve .  "
},
{
  "id": "example-ch03-02-ex-8-2",
  "level": "2",
  "url": "sec-ch03-02-PartialDerivatives.html#example-ch03-02-ex-8-2",
  "type": "Example",
  "number": "3.2.5",
  "title": "",
  "body": "  Suppose we have the surface and that we want to compute . Below is a picture of this surface intersected with the plane .   A cross-section of z equals f of x and y, parallel to the xz-plane at y equals b, showing the partial derivative with respect to x at x equals a.     When we compute , geometrically, we are computing the slope of the tangent line to the curve at the input , as shown below:   The trace y equals b, and the tangent line of the trace at x equals a.      Above we see the curve and the tangent line at    "
},
{
  "id": "sec-ch03-02-PartialDerivatives-8",
  "level": "2",
  "url": "sec-ch03-02-PartialDerivatives.html#sec-ch03-02-PartialDerivatives-8",
  "type": "Definition",
  "number": "3.2.6",
  "title": "Partial Derivative with Respect to <span class=\"process-math\">\\(x\\)<\/span>.",
  "body": " Partial Derivative with Respect to   Given a scalar-valued function , its partial derivative with respect to at the input (or at the point is defined as .  We interpret as:     The slope of the tangent line to the curve at the point .    The rate of change of at the input in the direction of the positive -axis.      "
},
{
  "id": "sec-ch03-02-PartialDerivatives-9",
  "level": "2",
  "url": "sec-ch03-02-PartialDerivatives.html#sec-ch03-02-PartialDerivatives-9",
  "type": "Note",
  "number": "3.2.7",
  "title": "",
  "body": " We have a similar definition for with a similar geometric interpretation.  "
},
{
  "id": "sec-ch03-02-PartialDerivatives-10",
  "level": "2",
  "url": "sec-ch03-02-PartialDerivatives.html#sec-ch03-02-PartialDerivatives-10",
  "type": "Definition",
  "number": "3.2.8",
  "title": "Partial Derivative with Respect to <span class=\"process-math\">\\(y\\)<\/span>.",
  "body": " Partial Derivative with Respect to   Given a scalar-valued function , its partial derivative with respect to at the input (or at the point is defined as   We interpret as:     The slope of the tangent line to the curve at the point .    The rate of change of at the input in the direction of the positive -axis.      "
},
{
  "id": "fig-ch03-02-partial-y-traces",
  "level": "2",
  "url": "sec-ch03-02-PartialDerivatives.html#fig-ch03-02-partial-y-traces",
  "type": "Figure",
  "number": "3.2.4",
  "title": "",
  "body": " The curve and the tangent line at ( )    A cross-section of z equals f of x and y, parallel to the yz-plane at x equals a.      The trace x equals a, and the tangent line of the trace at y equals b.      "
},
{
  "id": "sec-ch03-02-PartialDerivatives-13",
  "level": "2",
  "url": "sec-ch03-02-PartialDerivatives.html#sec-ch03-02-PartialDerivatives-13",
  "type": "Remark",
  "number": "3.2.9",
  "title": "",
  "body": " It is important we use proper notation when working with partial derivatives. Make sure to use the partial symbol and always refer to it as a partial derivative (not just a derivative).  "
},
{
  "id": "sec-ch03-02-PartialDerivatives-14",
  "level": "2",
  "url": "sec-ch03-02-PartialDerivatives.html#sec-ch03-02-PartialDerivatives-14",
  "type": "Note",
  "number": "3.2.10",
  "title": "Computing Partial Derivatives.",
  "body": " Computing Partial Derivatives  As is expected, we don't need to use limits every time we want to compute partial derivatives.  "
},
{
  "id": "sec-ch03-02-PartialDerivatives-15",
  "level": "2",
  "url": "sec-ch03-02-PartialDerivatives.html#sec-ch03-02-PartialDerivatives-15",
  "type": "Definition",
  "number": "3.2.11",
  "title": "Partial Derivatives (Computational).",
  "body": " Partial Derivatives (Computational)   Given a scalar-valued function , to compute , take (algorithmically) the usual derivative of with respect to whilst treating the variable as a constant. (Similarly for ).   "
},
{
  "id": "example-ch03-02-ex-8-3",
  "level": "2",
  "url": "sec-ch03-02-PartialDerivatives.html#example-ch03-02-ex-8-3",
  "type": "Example",
  "number": "3.2.12",
  "title": "",
  "body": "  Given , compute  (a) .  (b) .    Treating as a constant, the term contains no at all, so from the point of view of it is just a fixed number (for example, if were held at , then , a constant). The derivative of any constant is 0, so . The term does depend on and is differentiated using the (single-variable) chain rule, treating as a constant. Putting the two pieces together:     Treating as a constant, both terms now depend on :    "
},
{
  "id": "example-ch03-02-ex-8-4",
  "level": "2",
  "url": "sec-ch03-02-PartialDerivatives.html#example-ch03-02-ex-8-4",
  "type": "Example",
  "number": "3.2.13",
  "title": "",
  "body": "  Given , compute  (a) .  (b) .    Treating as a constant and using the chain rule with outer function :     Treating as a constant:    "
},
{
  "id": "example-ch03-02-ex-8-5",
  "level": "2",
  "url": "sec-ch03-02-PartialDerivatives.html#example-ch03-02-ex-8-5",
  "type": "Example",
  "number": "3.2.14",
  "title": "",
  "body": "  Consider the Cobb-Douglas Production function (L=labor, K = capital):   1)Find the marginal productivity of labor and marginal productivity of capital when 20 units of labor and 10 units of capital are invested.  2) For this value of is this Cobb-Douglas Production function an increasing or decreasing function of   3) For this value of is this Cobb-Douglas Production function an increasing or decreasing function of     The marginal productivity of labor is the partial derivative and the marginal productivity of capital is the partial derivative . Treating and as constants respectively: Evaluating at the input : So at this investment level, one additional unit of labor increases production by approximately 8.40 units, while one additional unit of capital increases production by approximately 1.87 units.    The rate of change of with respect to is , which for is for every (in particular ). Since the partial derivative with respect to is positive, the production function is an increasing function of .    The rate of change of with respect to is , which for is for every (in particular ). Since the partial derivative with respect to is positive, the production function is an increasing function of .   "
},
{
  "id": "example-ch03-02-ex-8-6",
  "level": "2",
  "url": "sec-ch03-02-PartialDerivatives.html#example-ch03-02-ex-8-6",
  "type": "Example",
  "number": "3.2.15",
  "title": "",
  "body": "  Given , what would be the approximate effect on of increasing from 2 to 3 while keeping fixed at 25 units? What about decreasing from 25 to 24 units while keeping fixed at 2 units?    For the first change we keep fixed at 25 and increase by , so we use the approximation . Treating as a constant, , so and the approximate effect is an increase of about 60 units in . For the second change we keep fixed at 2 and decrease by , so we use . Treating as a constant, , so and the approximate effect is a decrease of about 0.8 units in .   "
},
{
  "id": "sec-ch03-02-PartialDerivatives-20",
  "level": "2",
  "url": "sec-ch03-02-PartialDerivatives.html#sec-ch03-02-PartialDerivatives-20",
  "type": "Note",
  "number": "3.2.16",
  "title": "Differentiability.",
  "body": " Differentiability  We can talk about a function being differentiable at an input . However, it isn't as easy as just saying that and exist.  "
},
{
  "id": "sec-ch03-02-PartialDerivatives-21",
  "level": "2",
  "url": "sec-ch03-02-PartialDerivatives.html#sec-ch03-02-PartialDerivatives-21",
  "type": "Definition",
  "number": "3.2.17",
  "title": "Differentiability.",
  "body": " Differentiability   A function is differentiable at the input provided that and exist and that where approaches 0 as approaches and approaches .   "
},
{
  "id": "sec-ch03-02-PartialDerivatives-22",
  "level": "2",
  "url": "sec-ch03-02-PartialDerivatives.html#sec-ch03-02-PartialDerivatives-22",
  "type": "Remark",
  "number": "3.2.18",
  "title": "",
  "body": " Geometrically, this means that is differentiable at the input if as you zoom into the point ( ), the graph of looks like a plane (is smooth).  "
},
{
  "id": "example-ch03-02-ex-8-7",
  "level": "2",
  "url": "sec-ch03-02-PartialDerivatives.html#example-ch03-02-ex-8-7",
  "type": "Example",
  "number": "3.2.19",
  "title": "",
  "body": "  Consider the surface    You can verify that (they exist), but is not differentiable at .    We first verify that both partial derivatives exist at using the limit definitions. Along the -axis ( ) the function is for every , so and similarly along the -axis ( ) we have , so . Both partial derivatives exist.  Now suppose were differentiable at . Then the error term would have to approach 0 as approaches 0 and approaches 0. But if we approach the origin along the line , then for every  which does not approach 0. Hence is not differentiable at . This matches the picture below: no matter how far we zoom in at the origin, the graph never flattens out to look like a plane.   "
},
{
  "id": "fig-ch03-02-ex-8-7",
  "level": "2",
  "url": "sec-ch03-02-PartialDerivatives.html#fig-ch03-02-ex-8-7",
  "type": "Figure",
  "number": "3.2.5",
  "title": "",
  "body": " A surface z equals f of x and y, from example 8.7    "
},
{
  "id": "sec-ch03-02-PartialDerivatives-25",
  "level": "2",
  "url": "sec-ch03-02-PartialDerivatives.html#sec-ch03-02-PartialDerivatives-25",
  "type": "Note",
  "number": "3.2.20",
  "title": "",
  "body": " As with traditional derivatives, you can compute partial derivatives multiple times (even with respect to different variables).  "
},
{
  "id": "sec-ch03-02-PartialDerivatives-26",
  "level": "2",
  "url": "sec-ch03-02-PartialDerivatives.html#sec-ch03-02-PartialDerivatives-26",
  "type": "Remark",
  "number": "3.2.21",
  "title": "Second-Order Partial Derivatives.",
  "body": " Second-Order Partial Derivatives  Below is a list of the four second-order partial derivatives of a function and how we represent them symbolically:   "
},
{
  "id": "example-ch03-02-ex-8-8",
  "level": "2",
  "url": "sec-ch03-02-PartialDerivatives.html#example-ch03-02-ex-8-8",
  "type": "Example",
  "number": "3.2.22",
  "title": "",
  "body": "  Find all four second-order partial derivatives of .    We first compute the two first-order partial derivatives, treating and as constants respectively: Differentiating each of these once more, with respect to each variable: Note that the two mixed partial derivatives are equal, , as expected since both are continuous functions (wherever , which is the domain of ).   "
},
{
  "id": "sec-ch03-02-PartialDerivatives-28",
  "level": "2",
  "url": "sec-ch03-02-PartialDerivatives.html#sec-ch03-02-PartialDerivatives-28",
  "type": "Note",
  "number": "3.2.23",
  "title": "",
  "body": " Note that in , . This isn't always the case, but it is the case if and are continuous functions.  "
},
{
  "id": "sec-ch03-03-ChainRule",
  "level": "1",
  "url": "sec-ch03-03-ChainRule.html",
  "type": "Section",
  "number": "3.3",
  "title": "Multi-Variable Chain Rule",
  "body": " Multi-Variable Chain Rule   In this section we will consider two different cases when taking derivatives:     You have a function where and (both and are themselves functions of single variable ).    You have a function where and (both and are themselves functions of multiple variables and ).       Chain Rule in Case 1  Given a function where and , then the derivative of with respect to is given by .    In this case we can use the usual derivative notation since is a function of just the variable  if we replace with and with .    From OpenStax, Calculus Volume 3, Section 4.5   A dependency diagram showing z as a function of x and y, each depending on t, illustrating the chain rule case 1.   A dependency diagram showing as a function of and , each depending on , illustrating the chain rule case 1.       Find , where , in the following ways:  (a) First make the substitutions and , and write as a function of .  (b) Using the Chain Rule.    Substituting and into writes as a function of just the variable : Differentiating with respect to , using the single-variable chain rule on :     The partial derivatives of and the derivatives of and are so by the Chain Rule Substituting to express everything in terms of : which agrees with the answer from part (a).     The Chain Rule is an important tool because in many applications, you don't know specific expressions for or , but do know the corresponding rates of change.     Consider the Cobb-Douglas Production function where represents production, represents availability of capital, and represents availability of labor. Suppose that both and are also functions of time (which makes sense as the availability of capital and labor may change depending on time). Moreover, assume that      increases by 2 units when increases 1 unit and increases by 7 units when increases 1 unit.     increases by 0.5 units when increases 1 unit and increases by 3 units when increases 1 unit.     When increases by 1 unit, how many units does increase by?    Here depends on the intermediate variables and , and both are functions of , so by the Chain Rule The given information is exactly these four rates of change: and from the first bullet point, and and from the second. Hence so when increases by 1 unit, production increases by approximately 15.5 units. Notice that we never needed explicit formulas for , , or ; the rates of change were enough.     The Chain Rule formula works no matter how many intermediate variables you have. For example, suppose and , and (here, are your intermediate variables). Then .    Chain Rule in Case 2  Given a function where and , then the partial derivatives of with respect to and have the following formulas:     Here we must use the partial derivative notation since even if we substitute and is still a function of two variables ( and ).    From OpenStax, Calculus Volume 3, Section 4.5   A dependency diagram showing z as a function of x and y, each depending on u and v, illustrating the chain rule case 2.   A dependency diagram showing as a function of and , each depending on and , illustrating the chain rule case 2.       Let where and . Compute in the following ways:  (a) First make the substitutions and , and write as a function of and .  (b) Using the Chain Rule.    Substituting and into : Differentiating with respect to (treating as a constant), using the product rule and the single-variable chain rule:     The partial derivatives of , , and are so by the Chain Rule Substituting and : which agrees with the answer from part (a).     This formula works no matter how many intermediate variables you have. For example, suppose and , and (here, are your intermediate variables). Then     Restricting the Domain of a Surface to a Curve  Given a surface , we sometimes are only interested in certain parts of the surface. Specifically, we can restrict the inputs of a surface to a curve in its domain by using appropriate substitutions and .     Suppose we are walking on the surface of a part of a sphere but we only want to walk above the line in its domain. We can do this by substituting and .   The sphere along with curve on the sphere above the line parametrised by x = t, y = t plus 1      in purple and in yellow    Making the substitutions and restricts the inputs of the surface to the line , and the height of the surface becomes a function of the single variable : This is the yellow curve in the picture. Note that for to be defined we need ; these are exactly the values of for which the line lies underneath the part of the sphere.      Consider the surface of a part of a sphere and the curve in the -plane given parametrically as and , where .  (a) Find .   The sphere along with curve on the sphere above the circle parametrised by x = cosine of t plus 0.5, y = sine of t plus 1.5      in purple and in yellow. blue  (b) Imagine that you are walking on the surface directly above the curve (the surface restricted to inputs coming from ). Find the values of for which you are walking uphill ( is increasing).    We use the Chain Rule. Treating and as constants respectively, the partial derivatives of are and the derivatives of the parametrization are and . Hence Substituting and , the numerator becomes and the expression under the square root becomes Hence     We are walking uphill when . Since , the denominator satisfies , so the sign of is the sign of the numerator . Another argument that arrives in the same conclusion is that denominator is always non-negative (as a square root) and well defined (not zero). Solving on gives or . Testing a value in each of the resulting intervals: at we get ; at we get ; and at we get . Hence is increasing, and we are walking uphill, for     "
},
{
  "id": "sec-ch03-03-ChainRule-2",
  "level": "2",
  "url": "sec-ch03-03-ChainRule.html#sec-ch03-03-ChainRule-2",
  "type": "Note",
  "number": "3.3.1",
  "title": "",
  "body": " In this section we will consider two different cases when taking derivatives:     You have a function where and (both and are themselves functions of single variable ).    You have a function where and (both and are themselves functions of multiple variables and ).     "
},
{
  "id": "sec-ch03-03-ChainRule-3",
  "level": "2",
  "url": "sec-ch03-03-ChainRule.html#sec-ch03-03-ChainRule-3",
  "type": "Remark",
  "number": "3.3.2",
  "title": "Chain Rule in Case 1.",
  "body": " Chain Rule in Case 1  Given a function where and , then the derivative of with respect to is given by .  "
},
{
  "id": "sec-ch03-03-ChainRule-4",
  "level": "2",
  "url": "sec-ch03-03-ChainRule.html#sec-ch03-03-ChainRule-4",
  "type": "Note",
  "number": "3.3.3",
  "title": "",
  "body": " In this case we can use the usual derivative notation since is a function of just the variable  if we replace with and with .  "
},
{
  "id": "fig-ch03-03-chain-rule-case-1",
  "level": "2",
  "url": "sec-ch03-03-ChainRule.html#fig-ch03-03-chain-rule-case-1",
  "type": "Figure",
  "number": "3.3.1",
  "title": "",
  "body": " From OpenStax, Calculus Volume 3, Section 4.5   A dependency diagram showing z as a function of x and y, each depending on t, illustrating the chain rule case 1.   A dependency diagram showing as a function of and , each depending on , illustrating the chain rule case 1.    "
},
{
  "id": "example-ch03-03-ex-9-1",
  "level": "2",
  "url": "sec-ch03-03-ChainRule.html#example-ch03-03-ex-9-1",
  "type": "Example",
  "number": "3.3.4",
  "title": "",
  "body": "  Find , where , in the following ways:  (a) First make the substitutions and , and write as a function of .  (b) Using the Chain Rule.    Substituting and into writes as a function of just the variable : Differentiating with respect to , using the single-variable chain rule on :     The partial derivatives of and the derivatives of and are so by the Chain Rule Substituting to express everything in terms of : which agrees with the answer from part (a).   "
},
{
  "id": "sec-ch03-03-ChainRule-7",
  "level": "2",
  "url": "sec-ch03-03-ChainRule.html#sec-ch03-03-ChainRule-7",
  "type": "Remark",
  "number": "3.3.5",
  "title": "",
  "body": " The Chain Rule is an important tool because in many applications, you don't know specific expressions for or , but do know the corresponding rates of change.  "
},
{
  "id": "example-ch03-03-ex-9-2",
  "level": "2",
  "url": "sec-ch03-03-ChainRule.html#example-ch03-03-ex-9-2",
  "type": "Example",
  "number": "3.3.6",
  "title": "",
  "body": "  Consider the Cobb-Douglas Production function where represents production, represents availability of capital, and represents availability of labor. Suppose that both and are also functions of time (which makes sense as the availability of capital and labor may change depending on time). Moreover, assume that      increases by 2 units when increases 1 unit and increases by 7 units when increases 1 unit.     increases by 0.5 units when increases 1 unit and increases by 3 units when increases 1 unit.     When increases by 1 unit, how many units does increase by?    Here depends on the intermediate variables and , and both are functions of , so by the Chain Rule The given information is exactly these four rates of change: and from the first bullet point, and and from the second. Hence so when increases by 1 unit, production increases by approximately 15.5 units. Notice that we never needed explicit formulas for , , or ; the rates of change were enough.   "
},
{
  "id": "sec-ch03-03-ChainRule-9",
  "level": "2",
  "url": "sec-ch03-03-ChainRule.html#sec-ch03-03-ChainRule-9",
  "type": "Note",
  "number": "3.3.7",
  "title": "",
  "body": " The Chain Rule formula works no matter how many intermediate variables you have. For example, suppose and , and (here, are your intermediate variables). Then .  "
},
{
  "id": "sec-ch03-03-ChainRule-10",
  "level": "2",
  "url": "sec-ch03-03-ChainRule.html#sec-ch03-03-ChainRule-10",
  "type": "Remark",
  "number": "3.3.8",
  "title": "Chain Rule in Case 2.",
  "body": " Chain Rule in Case 2  Given a function where and , then the partial derivatives of with respect to and have the following formulas:   "
},
{
  "id": "sec-ch03-03-ChainRule-11",
  "level": "2",
  "url": "sec-ch03-03-ChainRule.html#sec-ch03-03-ChainRule-11",
  "type": "Note",
  "number": "3.3.9",
  "title": "",
  "body": " Here we must use the partial derivative notation since even if we substitute and is still a function of two variables ( and ).  "
},
{
  "id": "fig-ch03-03-chain-rule-case-2",
  "level": "2",
  "url": "sec-ch03-03-ChainRule.html#fig-ch03-03-chain-rule-case-2",
  "type": "Figure",
  "number": "3.3.2",
  "title": "",
  "body": " From OpenStax, Calculus Volume 3, Section 4.5   A dependency diagram showing z as a function of x and y, each depending on u and v, illustrating the chain rule case 2.   A dependency diagram showing as a function of and , each depending on and , illustrating the chain rule case 2.    "
},
{
  "id": "example-ch03-03-ex-9-3",
  "level": "2",
  "url": "sec-ch03-03-ChainRule.html#example-ch03-03-ex-9-3",
  "type": "Example",
  "number": "3.3.10",
  "title": "",
  "body": "  Let where and . Compute in the following ways:  (a) First make the substitutions and , and write as a function of and .  (b) Using the Chain Rule.    Substituting and into : Differentiating with respect to (treating as a constant), using the product rule and the single-variable chain rule:     The partial derivatives of , , and are so by the Chain Rule Substituting and : which agrees with the answer from part (a).   "
},
{
  "id": "sec-ch03-03-ChainRule-14",
  "level": "2",
  "url": "sec-ch03-03-ChainRule.html#sec-ch03-03-ChainRule-14",
  "type": "Remark",
  "number": "3.3.11",
  "title": "",
  "body": " This formula works no matter how many intermediate variables you have. For example, suppose and , and (here, are your intermediate variables). Then   "
},
{
  "id": "sec-ch03-03-ChainRule-15",
  "level": "2",
  "url": "sec-ch03-03-ChainRule.html#sec-ch03-03-ChainRule-15",
  "type": "Note",
  "number": "3.3.12",
  "title": "Restricting the Domain of a Surface to a Curve.",
  "body": " Restricting the Domain of a Surface to a Curve  Given a surface , we sometimes are only interested in certain parts of the surface. Specifically, we can restrict the inputs of a surface to a curve in its domain by using appropriate substitutions and .  "
},
{
  "id": "example-ch03-03-ex-9-4",
  "level": "2",
  "url": "sec-ch03-03-ChainRule.html#example-ch03-03-ex-9-4",
  "type": "Example",
  "number": "3.3.13",
  "title": "",
  "body": "  Suppose we are walking on the surface of a part of a sphere but we only want to walk above the line in its domain. We can do this by substituting and .   The sphere along with curve on the sphere above the line parametrised by x = t, y = t plus 1      in purple and in yellow    Making the substitutions and restricts the inputs of the surface to the line , and the height of the surface becomes a function of the single variable : This is the yellow curve in the picture. Note that for to be defined we need ; these are exactly the values of for which the line lies underneath the part of the sphere.   "
},
{
  "id": "example-ch03-03-ex-9-5",
  "level": "2",
  "url": "sec-ch03-03-ChainRule.html#example-ch03-03-ex-9-5",
  "type": "Example",
  "number": "3.3.14",
  "title": "",
  "body": "  Consider the surface of a part of a sphere and the curve in the -plane given parametrically as and , where .  (a) Find .   The sphere along with curve on the sphere above the circle parametrised by x = cosine of t plus 0.5, y = sine of t plus 1.5      in purple and in yellow. blue  (b) Imagine that you are walking on the surface directly above the curve (the surface restricted to inputs coming from ). Find the values of for which you are walking uphill ( is increasing).    We use the Chain Rule. Treating and as constants respectively, the partial derivatives of are and the derivatives of the parametrization are and . Hence Substituting and , the numerator becomes and the expression under the square root becomes Hence     We are walking uphill when . Since , the denominator satisfies , so the sign of is the sign of the numerator . Another argument that arrives in the same conclusion is that denominator is always non-negative (as a square root) and well defined (not zero). Solving on gives or . Testing a value in each of the resulting intervals: at we get ; at we get ; and at we get . Hence is increasing, and we are walking uphill, for    "
},
{
  "id": "sec-ch03-04-DirectionalDerivatives",
  "level": "1",
  "url": "sec-ch03-04-DirectionalDerivatives.html",
  "type": "Section",
  "number": "3.4",
  "title": "Directional Derivatives and the Gradient",
  "body": " Directional Derivatives and the Gradient   As we saw earlier, given a scalar-valued function , we can compute its rate of change in the direction of the positive -axis (using ) and in the direction of the positive -axis (using ).   The next question to answer is, how do we find the rate of change of in any direction?   When we say direction, we mean a direction in the -plane.     Suppose we are standing on the surface , at the point , and want to find the rate of change of in the direction of the vector (North-East).  Geometrically, we do the same thing we did with partial derivatives: Intersect using a plane perpendicular to the -plane in the direction of , as shown below:     The surface intersected with a plane perpendicular to the -plane in the direction of .    The surface z equals f of x and y, intersected with a plane perpendicular to the xy-plane, containing a vector of the xy-plane.      A cross-section of the surface z equals f of x and y, in the direction of the unit vector u.       The graphs above show only the plots; you can drag and zoom them. To see the expressions behind them, or to save a copy and create your own version of the graphs, open them in a new page from here: link to the left graph , link to the right graph   Then, in the curve you get when doing this intersection, you find the slope of the tangent line to at the point , as shown below:   The tangent line to the cross-section of in the direction of .    The surface z equals f of x and y, with the directional derivative in the direction of unit vector u shown as the slope of a cross-section.      A cross-section of the surface z equals f of x and y, in the direction of the unit vector u.       The graphs above show only the plots; you can drag and zoom them. To see the expressions behind them, or to save a copy and create your own version of the graphs, open them in a new page from here: link to the left graph , link to the right graph    Since we can now find rates of change in any direction, we have to modify our definition of a partial derivative to allow for change in both the and variables. We call this new derivative a directional derivative.    Directional Derivative (Geometric)   Given a function , an input ( ), and a direction given by a nonzero unit vector , the rate of change of at the input (or the point ) in the direction of is given by .  We call this quantity the directional derivative of at the input ( ) in the direction of .     When working with directional derivatives, make sure the direction vector is a unit vector.     Find the rate of change of , at the point , in the direction of .    Here and , which is a unit vector since . Using the geometric definition of the directional derivative: Since we have and Hence So the rate of change of at the point in the direction of is .     Directional Derivative (Computational)   Given a differentiable function , an input , and a direction given by a nonzero unit vector , the rate of change of at the input (or the point ) in the direction of is given by where is called the gradient of .      Find the directional derivative of at the input ( ) in the direction of the vector .    The direction vector is not a unit vector, since its length is . Dividing by its length gives the unit vector The partial derivatives of are and , so Hence      Motivation  Suppose we are standing on the point on a differentiable function . What direction vector will maximize ?    Given , an input , and a (nonzero) unit vector ; if , we may write , where is the angle between and .     Use the work from the above remark to determine what angle between and will:  (a) Maximize .  (b) Minimize .  (c) Make .    From the remark, , where is a fixed positive number that does not depend on . So the value of the directional derivative is controlled entirely by , with .  (a) is maximized when is as large as possible, that is . The maximum value is , attained when points in the same direction as . The unit vector in that the direction is .  (b) is minimized when is as small as possible, that is . The minimum value is , attained when points in the direction opposite of . The unit vector in that the direction is   (c) when , that is when is orthogonal to . To find a unit vector(s) perpendicular to one needs to solve the system of equations and . This will result in two vectors and .     Steepest Ascent and Descent   Given a differentiable function and an input :     To maximize (move in the direction of steepest ascent), must be a unit vector in the direction of .    To minimize (move in the direction of steepest descent), must be a unit vector in the direction opposite of .    To make (move in a direction of no ascent nor descent), must be a unit vector in a direction orthogonal to .        In the definition above, when we say move, we refer to taking an infinitesimally small step in a given direction.     Suppose we are standing on a mountain given by the surface . We are currently standing on the point .  (a) In what direction should we move in order to move in the direction of steepest ascent? Give your answer as a unit vector.   The first octant part of the sphere centred at the origin with radius 3 and the point (2,1,2)     Graph of and   (b) In what direction should we move in order to minimize the rate of change of ?  (c) In what direction(s) should we move in order to move in a direction of no ascent nor descent?  (d) If we take a unit step in the direction found in part (a), what point would we end up on on the surface ?    The partial derivatives of are At the input we have , hence (a) To move in the direction of steepest ascent we must move in the direction of . Since , the unit vector is (Standing at , this direction points from the input towards the origin of the -plane, above which the top of the mountain sits.)    (b) To minimize the rate of change we must move in the direction opposite of , that is .  (c) We must move orthogonally to : a unit vector satisfies , and then . This gives the two directions and .  (d) Taking a unit step from the input in the direction found in part (a) lands on the input For the corresponding point on the surface we need the value of at this input. Since we get , so we end up on the point which is indeed higher than our starting height , as expected when moving in the direction of steepest ascent.      Given the surface :  (a) Compute the directional derivative of at the input in the direction of the vector .  (b) Does the vector give a direction of ascent or descent?    (a) The vector is a unit vector, since . By the chain rule, the partial derivatives of are At the input we have and . Hence and (b) Since , the function decreases as we move in the direction of , so gives a direction of descent.     Directional Derivatives in Higher Dimensions  Everything we have said about directional derivatives in 3-dimensions extends to higher dimensions. Moreover, the gradient vector is defined similarly.     Consider the (4-dimensional) function . In what direction is the rate of change of this surface at the input maximized?    Just as in 3 dimensions, the rate of change is maximized when we move in the direction of the gradient vector. Since , Hence the rate of change at the input is maximized in the direction of . As a unit vector, since ,     "
},
{
  "id": "sec-ch03-04-DirectionalDerivatives-2",
  "level": "2",
  "url": "sec-ch03-04-DirectionalDerivatives.html#sec-ch03-04-DirectionalDerivatives-2",
  "type": "Note",
  "number": "3.4.1",
  "title": "",
  "body": " As we saw earlier, given a scalar-valued function , we can compute its rate of change in the direction of the positive -axis (using ) and in the direction of the positive -axis (using ).  "
},
{
  "id": "sec-ch03-04-DirectionalDerivatives-4",
  "level": "2",
  "url": "sec-ch03-04-DirectionalDerivatives.html#sec-ch03-04-DirectionalDerivatives-4",
  "type": "Remark",
  "number": "3.4.2",
  "title": "",
  "body": " When we say direction, we mean a direction in the -plane.  "
},
{
  "id": "example-ch03-04-ex-10-1",
  "level": "2",
  "url": "sec-ch03-04-DirectionalDerivatives.html#example-ch03-04-ex-10-1",
  "type": "Example",
  "number": "3.4.3",
  "title": "",
  "body": "  Suppose we are standing on the surface , at the point , and want to find the rate of change of in the direction of the vector (North-East).  Geometrically, we do the same thing we did with partial derivatives: Intersect using a plane perpendicular to the -plane in the direction of , as shown below:   "
},
{
  "id": "fig-ch03-04-ex-10-1-intersection",
  "level": "2",
  "url": "sec-ch03-04-DirectionalDerivatives.html#fig-ch03-04-ex-10-1-intersection",
  "type": "Figure",
  "number": "3.4.1",
  "title": "",
  "body": " The surface intersected with a plane perpendicular to the -plane in the direction of .    The surface z equals f of x and y, intersected with a plane perpendicular to the xy-plane, containing a vector of the xy-plane.      A cross-section of the surface z equals f of x and y, in the direction of the unit vector u.      "
},
{
  "id": "fig-ch03-04-ex-10-1-tangent",
  "level": "2",
  "url": "sec-ch03-04-DirectionalDerivatives.html#fig-ch03-04-ex-10-1-tangent",
  "type": "Figure",
  "number": "3.4.2",
  "title": "",
  "body": " The tangent line to the cross-section of in the direction of .    The surface z equals f of x and y, with the directional derivative in the direction of unit vector u shown as the slope of a cross-section.      A cross-section of the surface z equals f of x and y, in the direction of the unit vector u.      "
},
{
  "id": "sec-ch03-04-DirectionalDerivatives-11",
  "level": "2",
  "url": "sec-ch03-04-DirectionalDerivatives.html#sec-ch03-04-DirectionalDerivatives-11",
  "type": "Note",
  "number": "3.4.4",
  "title": "",
  "body": " Since we can now find rates of change in any direction, we have to modify our definition of a partial derivative to allow for change in both the and variables. We call this new derivative a directional derivative.  "
},
{
  "id": "sec-ch03-04-DirectionalDerivatives-12",
  "level": "2",
  "url": "sec-ch03-04-DirectionalDerivatives.html#sec-ch03-04-DirectionalDerivatives-12",
  "type": "Definition",
  "number": "3.4.5",
  "title": "Directional Derivative (Geometric).",
  "body": " Directional Derivative (Geometric)   Given a function , an input ( ), and a direction given by a nonzero unit vector , the rate of change of at the input (or the point ) in the direction of is given by .  We call this quantity the directional derivative of at the input ( ) in the direction of .   "
},
{
  "id": "sec-ch03-04-DirectionalDerivatives-13",
  "level": "2",
  "url": "sec-ch03-04-DirectionalDerivatives.html#sec-ch03-04-DirectionalDerivatives-13",
  "type": "Remark",
  "number": "3.4.6",
  "title": "",
  "body": " When working with directional derivatives, make sure the direction vector is a unit vector.  "
},
{
  "id": "example-ch03-04-ex-10-2",
  "level": "2",
  "url": "sec-ch03-04-DirectionalDerivatives.html#example-ch03-04-ex-10-2",
  "type": "Example",
  "number": "3.4.7",
  "title": "",
  "body": "  Find the rate of change of , at the point , in the direction of .    Here and , which is a unit vector since . Using the geometric definition of the directional derivative: Since we have and Hence So the rate of change of at the point in the direction of is .   "
},
{
  "id": "sec-ch03-04-DirectionalDerivatives-15",
  "level": "2",
  "url": "sec-ch03-04-DirectionalDerivatives.html#sec-ch03-04-DirectionalDerivatives-15",
  "type": "Definition",
  "number": "3.4.8",
  "title": "Directional Derivative (Computational).",
  "body": " Directional Derivative (Computational)   Given a differentiable function , an input , and a direction given by a nonzero unit vector , the rate of change of at the input (or the point ) in the direction of is given by where is called the gradient of .   "
},
{
  "id": "example-ch03-04-ex-10-3",
  "level": "2",
  "url": "sec-ch03-04-DirectionalDerivatives.html#example-ch03-04-ex-10-3",
  "type": "Example",
  "number": "3.4.9",
  "title": "",
  "body": "  Find the directional derivative of at the input ( ) in the direction of the vector .    The direction vector is not a unit vector, since its length is . Dividing by its length gives the unit vector The partial derivatives of are and , so Hence    "
},
{
  "id": "sec-ch03-04-DirectionalDerivatives-17",
  "level": "2",
  "url": "sec-ch03-04-DirectionalDerivatives.html#sec-ch03-04-DirectionalDerivatives-17",
  "type": "Note",
  "number": "3.4.10",
  "title": "Motivation.",
  "body": " Motivation  Suppose we are standing on the point on a differentiable function . What direction vector will maximize ?  "
},
{
  "id": "sec-ch03-04-DirectionalDerivatives-18",
  "level": "2",
  "url": "sec-ch03-04-DirectionalDerivatives.html#sec-ch03-04-DirectionalDerivatives-18",
  "type": "Remark",
  "number": "3.4.11",
  "title": "",
  "body": " Given , an input , and a (nonzero) unit vector ; if , we may write , where is the angle between and .  "
},
{
  "id": "example-ch03-04-ex-10-4",
  "level": "2",
  "url": "sec-ch03-04-DirectionalDerivatives.html#example-ch03-04-ex-10-4",
  "type": "Example",
  "number": "3.4.12",
  "title": "",
  "body": "  Use the work from the above remark to determine what angle between and will:  (a) Maximize .  (b) Minimize .  (c) Make .    From the remark, , where is a fixed positive number that does not depend on . So the value of the directional derivative is controlled entirely by , with .  (a) is maximized when is as large as possible, that is . The maximum value is , attained when points in the same direction as . The unit vector in that the direction is .  (b) is minimized when is as small as possible, that is . The minimum value is , attained when points in the direction opposite of . The unit vector in that the direction is   (c) when , that is when is orthogonal to . To find a unit vector(s) perpendicular to one needs to solve the system of equations and . This will result in two vectors and .   "
},
{
  "id": "sec-ch03-04-DirectionalDerivatives-20",
  "level": "2",
  "url": "sec-ch03-04-DirectionalDerivatives.html#sec-ch03-04-DirectionalDerivatives-20",
  "type": "Definition",
  "number": "3.4.13",
  "title": "Steepest Ascent and Descent.",
  "body": " Steepest Ascent and Descent   Given a differentiable function and an input :     To maximize (move in the direction of steepest ascent), must be a unit vector in the direction of .    To minimize (move in the direction of steepest descent), must be a unit vector in the direction opposite of .    To make (move in a direction of no ascent nor descent), must be a unit vector in a direction orthogonal to .      "
},
{
  "id": "sec-ch03-04-DirectionalDerivatives-21",
  "level": "2",
  "url": "sec-ch03-04-DirectionalDerivatives.html#sec-ch03-04-DirectionalDerivatives-21",
  "type": "Remark",
  "number": "3.4.14",
  "title": "",
  "body": " In the definition above, when we say move, we refer to taking an infinitesimally small step in a given direction.  "
},
{
  "id": "example-ch03-04-ex-10-5",
  "level": "2",
  "url": "sec-ch03-04-DirectionalDerivatives.html#example-ch03-04-ex-10-5",
  "type": "Example",
  "number": "3.4.15",
  "title": "",
  "body": "  Suppose we are standing on a mountain given by the surface . We are currently standing on the point .  (a) In what direction should we move in order to move in the direction of steepest ascent? Give your answer as a unit vector.   The first octant part of the sphere centred at the origin with radius 3 and the point (2,1,2)     Graph of and   (b) In what direction should we move in order to minimize the rate of change of ?  (c) In what direction(s) should we move in order to move in a direction of no ascent nor descent?  (d) If we take a unit step in the direction found in part (a), what point would we end up on on the surface ?    The partial derivatives of are At the input we have , hence (a) To move in the direction of steepest ascent we must move in the direction of . Since , the unit vector is (Standing at , this direction points from the input towards the origin of the -plane, above which the top of the mountain sits.)    (b) To minimize the rate of change we must move in the direction opposite of , that is .  (c) We must move orthogonally to : a unit vector satisfies , and then . This gives the two directions and .  (d) Taking a unit step from the input in the direction found in part (a) lands on the input For the corresponding point on the surface we need the value of at this input. Since we get , so we end up on the point which is indeed higher than our starting height , as expected when moving in the direction of steepest ascent.   "
},
{
  "id": "example-ch03-04-ex-10-6",
  "level": "2",
  "url": "sec-ch03-04-DirectionalDerivatives.html#example-ch03-04-ex-10-6",
  "type": "Example",
  "number": "3.4.16",
  "title": "",
  "body": "  Given the surface :  (a) Compute the directional derivative of at the input in the direction of the vector .  (b) Does the vector give a direction of ascent or descent?    (a) The vector is a unit vector, since . By the chain rule, the partial derivatives of are At the input we have and . Hence and (b) Since , the function decreases as we move in the direction of , so gives a direction of descent.   "
},
{
  "id": "sec-ch03-04-DirectionalDerivatives-24",
  "level": "2",
  "url": "sec-ch03-04-DirectionalDerivatives.html#sec-ch03-04-DirectionalDerivatives-24",
  "type": "Remark",
  "number": "3.4.17",
  "title": "Directional Derivatives in Higher Dimensions.",
  "body": " Directional Derivatives in Higher Dimensions  Everything we have said about directional derivatives in 3-dimensions extends to higher dimensions. Moreover, the gradient vector is defined similarly.  "
},
{
  "id": "example-ch03-04-ex-10-7",
  "level": "2",
  "url": "sec-ch03-04-DirectionalDerivatives.html#example-ch03-04-ex-10-7",
  "type": "Example",
  "number": "3.4.18",
  "title": "",
  "body": "  Consider the (4-dimensional) function . In what direction is the rate of change of this surface at the input maximized?    Just as in 3 dimensions, the rate of change is maximized when we move in the direction of the gradient vector. Since , Hence the rate of change at the input is maximized in the direction of . As a unit vector, since ,    "
},
{
  "id": "sec-ch03-05-TangentPlanes",
  "level": "1",
  "url": "sec-ch03-05-TangentPlanes.html",
  "type": "Section",
  "number": "3.5",
  "title": "Tangent Planes and Local Linearization",
  "body": " Tangent Planes and Local Linearization   Recall that given a function , we can intersect the function with the hyperplane to get a 3-dimensional level surface .  For example, the sphere is a level surface of when setting .    The sphere of radius 3 centred at the origin.      If a surface is given explicitly as , it can still be thought of as a level surface of a function .    Explicit and Level Surfaces  The surface is a level surface of , by setting .     Given , find a function such that is one of its level surfaces.    By the remark above, the surface is a level surface of , obtained by setting . Hence we may take and the graph of is exactly the level surface .     We learned that a function is differentiable at if it looks like a plane when we zoom into the point .   We will now give the equation that defines this plane and discuss where it comes from.   Tangent Plane to a Surface (Explicit)   Given a differentiable surface , the tangent plane to the surface at the point ( ) is given by the equation       Find an equation for the tangent plane to the surface at the point .    Here and . The partial derivatives are and , so and , which agrees with the given point. Substituting into the formula for the tangent plane: .      The paraboloid z equals 1 minus x squared over 2 minus y squared over 2, with its tangent plane at the point (a, b, f(a,b)).      in green\/blue and the tangent plane in grey   The equation for the tangent plane depends on the point .    Remember that every surface is a level surface of some function . Hence, to see where the equation for the tangent plane comes from, we work with (implicit) level surfaces of the form , where is a scalar (not a variable).    If is a 3D-curve on the surface passing through the point ( ) on the surface at time , then .  This is true for EVERY differentiable curve on the surface passing through ( ).    in red and tangent vectors in dark blue for two different curves    The surface z equals f of x and y, with the tangent plane and normal vector at a point. The normal vector to the plane is also perpendicular to a circle-like curve lying on the sphere.      An alternative view of the surface z equals f of x and y, with the tangent plane and normal vector at a point. The normal vector to the plane is also perpendicular to a line-like curve lying on the sphere.       The graphs above show only the plots; you can drag and zoom them. To see the expressions behind them, or to save a copy and create your own version of the graphs, open them in a new page from here: link to the left graph , link to the right graph    Gradient and Tangent Plane  Given a differentiable (level) surface , the tangent plane to the surface at the point ( ) is the plane whose normal vector, given by , is orthogonal to the tangent vectors of every (differentiable) curve on the surface passing through ( ).   This observation gives rise to the following formula:   Tangent Plane to a Surface (Implicit)   Given a differentiable surface and a point on the surface, the tangent plane to the surface at the point has normal vector and is given by the equation .      Find an equation for the tangent plane to the surface at the point    The surface x plus y squared plus z cubed equals 1, and its tangent plane at the point (0,0,1).      in green and the tangent plane in light blue    The surface is the level surface of the function , and the point is indeed on the surface since . The partial derivatives are , , and , so the normal vector to the tangent plane is Substituting into the formula for the (implicit) tangent plane:      Approximations  As we saw in , the equation is more complicated than the equation for the tangent plane at .  This is important because we can use the tangent plane to approximate for points close to .    Tangent Planes and Approximations  Given a differentiable surface , its tangent plane at the point ( ) can be used to approximate the surface for points close to ( ).     Given the surface , use tangent planes to approximate and .    The idea is to choose, for each input, a nearby input at which and its partial derivatives are easy to evaluate, and then approximate by its tangent plane at . By the product and chain rules, the partial derivatives of are For the closest convenient input is . There , , and , so the tangent plane is and hence .  For the closest convenient input is . There , , and , so the tangent plane is and hence .      Find all points on the surface where the tangent plane is horizontal (parallel to the plane ).    Writing the surface as with , the tangent plane at the point is which is horizontal exactly when and , since then the equation reduces to the constant plane . The partial derivatives are Setting both equal to zero ( and ) and adding the two equations gives Substituting into gives , and this also satisfies . Finally So the only point where the tangent plane is horizontal is , where the tangent plane is .     3D gradient vs 2D gradient  Do not confuse the 3D gradient with the 2D gradient we saw when studying directional derivatives. Here we summarize their different applications:     Given an (explicit) 3-dimensional surface , its 2 -dimensional gradient tells you the direction (in the plane) of steepest ascent at the input .    Given an (implicit) 3-dimensional surface , its 3-dimensional gradient gives you a normal vector to the tangent plane to the surface at the point .       Given a differentiable function , we saw that we can approximate this function for inputs close to by using the tangent plane to at the point ( ). That is, .   Since the expression on the right only involves constants and linear powers of and , this approximation is referred to as the linearization of at the input .   Linearization of a Function at a Point   Given a differentiable function , its linearization (or linear approximation) at the input ( ) is given by      Since the linearization of at an input ( ) is just the equation of the tangent plane to at that input, the main application is the same: Approximate with a simpler function.     Find the linearization of at the input . Use this to approximate .    We first compute the value of and of its partial derivatives at the input : Substituting these into the formula for the linearization at : Since the input is close to , we can approximate by the linearization: For comparison, the exact value is , so the approximation is fairly close.     When talking about partial derivatives, we saw the follow formulas: and .  If we want to approximate a change in a function in both coordinates, we have a similar formula.    Approximating Change   Given a differentiable function , we can approximate small changes in and using .  Sometimes, this equation is written using the total differential of , as       The volume of a right circular cone with radius and height is . Approximate the change in the volume of the cone when the radius changes from to and the height changes from to .    Here , the radius changes from by and the height changes from by . We compute the partial derivatives of at the input : By the approximating-change formula: So the volume increases by approximately cubic units. Even though the height decreases, the change coming from the radius is larger, so the net change in the volume is positive.     This formula is useful when:     You do not have the explicit function, but you do know its rates of change.    The original function is too convoluted to work with, this approach can be more computationally efficient.      The formula for the linearization of a function generalizes easily to functions of more than two inputs.   Linearization in Higher Dimensions  Given a differentiable function , its linearization at the input ( ) is given by .   "
},
{
  "id": "sec-ch03-05-TangentPlanes-2",
  "level": "2",
  "url": "sec-ch03-05-TangentPlanes.html#sec-ch03-05-TangentPlanes-2",
  "type": "Note",
  "number": "3.5.1",
  "title": "",
  "body": " Recall that given a function , we can intersect the function with the hyperplane to get a 3-dimensional level surface .  For example, the sphere is a level surface of when setting .  "
},
{
  "id": "fig-ch03-05-sphere",
  "level": "2",
  "url": "sec-ch03-05-TangentPlanes.html#fig-ch03-05-sphere",
  "type": "Figure",
  "number": "3.5.1",
  "title": "",
  "body": " The sphere of radius 3 centred at the origin.    "
},
{
  "id": "sec-ch03-05-TangentPlanes-4",
  "level": "2",
  "url": "sec-ch03-05-TangentPlanes.html#sec-ch03-05-TangentPlanes-4",
  "type": "Note",
  "number": "3.5.2",
  "title": "",
  "body": " If a surface is given explicitly as , it can still be thought of as a level surface of a function .  "
},
{
  "id": "sec-ch03-05-TangentPlanes-5",
  "level": "2",
  "url": "sec-ch03-05-TangentPlanes.html#sec-ch03-05-TangentPlanes-5",
  "type": "Remark",
  "number": "3.5.3",
  "title": "Explicit and Level Surfaces.",
  "body": " Explicit and Level Surfaces  The surface is a level surface of , by setting .  "
},
{
  "id": "example-ch03-05-ex-11-1",
  "level": "2",
  "url": "sec-ch03-05-TangentPlanes.html#example-ch03-05-ex-11-1",
  "type": "Example",
  "number": "3.5.4",
  "title": "",
  "body": "  Given , find a function such that is one of its level surfaces.    By the remark above, the surface is a level surface of , obtained by setting . Hence we may take and the graph of is exactly the level surface .   "
},
{
  "id": "sec-ch03-05-TangentPlanes-7",
  "level": "2",
  "url": "sec-ch03-05-TangentPlanes.html#sec-ch03-05-TangentPlanes-7",
  "type": "Note",
  "number": "3.5.5",
  "title": "",
  "body": " We learned that a function is differentiable at if it looks like a plane when we zoom into the point .  "
},
{
  "id": "sec-ch03-05-TangentPlanes-9",
  "level": "2",
  "url": "sec-ch03-05-TangentPlanes.html#sec-ch03-05-TangentPlanes-9",
  "type": "Definition",
  "number": "3.5.6",
  "title": "Tangent Plane to a Surface (Explicit).",
  "body": " Tangent Plane to a Surface (Explicit)   Given a differentiable surface , the tangent plane to the surface at the point ( ) is given by the equation    "
},
{
  "id": "example-ch03-05-ex-11-2",
  "level": "2",
  "url": "sec-ch03-05-TangentPlanes.html#example-ch03-05-ex-11-2",
  "type": "Example",
  "number": "3.5.7",
  "title": "",
  "body": "  Find an equation for the tangent plane to the surface at the point .    Here and . The partial derivatives are and , so and , which agrees with the given point. Substituting into the formula for the tangent plane: .    "
},
{
  "id": "fig-ch03-05-paraboloid-tangent-plane",
  "level": "2",
  "url": "sec-ch03-05-TangentPlanes.html#fig-ch03-05-paraboloid-tangent-plane",
  "type": "Figure",
  "number": "3.5.2",
  "title": "",
  "body": " The paraboloid z equals 1 minus x squared over 2 minus y squared over 2, with its tangent plane at the point (a, b, f(a,b)).    "
},
{
  "id": "sec-ch03-05-TangentPlanes-13",
  "level": "2",
  "url": "sec-ch03-05-TangentPlanes.html#sec-ch03-05-TangentPlanes-13",
  "type": "Note",
  "number": "3.5.8",
  "title": "",
  "body": " The equation for the tangent plane depends on the point .  "
},
{
  "id": "sec-ch03-05-TangentPlanes-14",
  "level": "2",
  "url": "sec-ch03-05-TangentPlanes.html#sec-ch03-05-TangentPlanes-14",
  "type": "Note",
  "number": "3.5.9",
  "title": "",
  "body": " Remember that every surface is a level surface of some function . Hence, to see where the equation for the tangent plane comes from, we work with (implicit) level surfaces of the form , where is a scalar (not a variable).  "
},
{
  "id": "sec-ch03-05-TangentPlanes-15",
  "level": "2",
  "url": "sec-ch03-05-TangentPlanes.html#sec-ch03-05-TangentPlanes-15",
  "type": "Remark",
  "number": "3.5.10",
  "title": "",
  "body": " If is a 3D-curve on the surface passing through the point ( ) on the surface at time , then .  This is true for EVERY differentiable curve on the surface passing through ( ).  "
},
{
  "id": "fig-ch03-05-gradient-tangent-vectors",
  "level": "2",
  "url": "sec-ch03-05-TangentPlanes.html#fig-ch03-05-gradient-tangent-vectors",
  "type": "Figure",
  "number": "3.5.3",
  "title": "",
  "body": " in red and tangent vectors in dark blue for two different curves    The surface z equals f of x and y, with the tangent plane and normal vector at a point. The normal vector to the plane is also perpendicular to a circle-like curve lying on the sphere.      An alternative view of the surface z equals f of x and y, with the tangent plane and normal vector at a point. The normal vector to the plane is also perpendicular to a line-like curve lying on the sphere.      "
},
{
  "id": "sec-ch03-05-TangentPlanes-18",
  "level": "2",
  "url": "sec-ch03-05-TangentPlanes.html#sec-ch03-05-TangentPlanes-18",
  "type": "Remark",
  "number": "3.5.11",
  "title": "Gradient and Tangent Plane.",
  "body": " Gradient and Tangent Plane  Given a differentiable (level) surface , the tangent plane to the surface at the point ( ) is the plane whose normal vector, given by , is orthogonal to the tangent vectors of every (differentiable) curve on the surface passing through ( ).  "
},
{
  "id": "sec-ch03-05-TangentPlanes-20",
  "level": "2",
  "url": "sec-ch03-05-TangentPlanes.html#sec-ch03-05-TangentPlanes-20",
  "type": "Definition",
  "number": "3.5.12",
  "title": "Tangent Plane to a Surface (Implicit).",
  "body": " Tangent Plane to a Surface (Implicit)   Given a differentiable surface and a point on the surface, the tangent plane to the surface at the point has normal vector and is given by the equation .   "
},
{
  "id": "example-ch03-05-ex-11-3",
  "level": "2",
  "url": "sec-ch03-05-TangentPlanes.html#example-ch03-05-ex-11-3",
  "type": "Example",
  "number": "3.5.13",
  "title": "",
  "body": "  Find an equation for the tangent plane to the surface at the point    The surface x plus y squared plus z cubed equals 1, and its tangent plane at the point (0,0,1).      in green and the tangent plane in light blue    The surface is the level surface of the function , and the point is indeed on the surface since . The partial derivatives are , , and , so the normal vector to the tangent plane is Substituting into the formula for the (implicit) tangent plane:    "
},
{
  "id": "sec-ch03-05-TangentPlanes-22",
  "level": "2",
  "url": "sec-ch03-05-TangentPlanes.html#sec-ch03-05-TangentPlanes-22",
  "type": "Note",
  "number": "3.5.14",
  "title": "Approximations.",
  "body": " Approximations  As we saw in , the equation is more complicated than the equation for the tangent plane at .  This is important because we can use the tangent plane to approximate for points close to .  "
},
{
  "id": "sec-ch03-05-TangentPlanes-23",
  "level": "2",
  "url": "sec-ch03-05-TangentPlanes.html#sec-ch03-05-TangentPlanes-23",
  "type": "Remark",
  "number": "3.5.15",
  "title": "Tangent Planes and Approximations.",
  "body": " Tangent Planes and Approximations  Given a differentiable surface , its tangent plane at the point ( ) can be used to approximate the surface for points close to ( ).  "
},
{
  "id": "example-ch03-05-ex-11-4",
  "level": "2",
  "url": "sec-ch03-05-TangentPlanes.html#example-ch03-05-ex-11-4",
  "type": "Example",
  "number": "3.5.16",
  "title": "",
  "body": "  Given the surface , use tangent planes to approximate and .    The idea is to choose, for each input, a nearby input at which and its partial derivatives are easy to evaluate, and then approximate by its tangent plane at . By the product and chain rules, the partial derivatives of are For the closest convenient input is . There , , and , so the tangent plane is and hence .  For the closest convenient input is . There , , and , so the tangent plane is and hence .   "
},
{
  "id": "example-ch03-05-ex-11-5",
  "level": "2",
  "url": "sec-ch03-05-TangentPlanes.html#example-ch03-05-ex-11-5",
  "type": "Example",
  "number": "3.5.17",
  "title": "",
  "body": "  Find all points on the surface where the tangent plane is horizontal (parallel to the plane ).    Writing the surface as with , the tangent plane at the point is which is horizontal exactly when and , since then the equation reduces to the constant plane . The partial derivatives are Setting both equal to zero ( and ) and adding the two equations gives Substituting into gives , and this also satisfies . Finally So the only point where the tangent plane is horizontal is , where the tangent plane is .   "
},
{
  "id": "sec-ch03-05-TangentPlanes-26",
  "level": "2",
  "url": "sec-ch03-05-TangentPlanes.html#sec-ch03-05-TangentPlanes-26",
  "type": "Remark",
  "number": "3.5.18",
  "title": "3D gradient <span class=\"process-math\">\\(\\nabla F(x, y, z)\\)<\/span> vs 2D gradient <span class=\"process-math\">\\(\\nabla f(x, y)\\)<\/span>.",
  "body": " 3D gradient vs 2D gradient  Do not confuse the 3D gradient with the 2D gradient we saw when studying directional derivatives. Here we summarize their different applications:     Given an (explicit) 3-dimensional surface , its 2 -dimensional gradient tells you the direction (in the plane) of steepest ascent at the input .    Given an (implicit) 3-dimensional surface , its 3-dimensional gradient gives you a normal vector to the tangent plane to the surface at the point .     "
},
{
  "id": "sec-ch03-05-TangentPlanes-27",
  "level": "2",
  "url": "sec-ch03-05-TangentPlanes.html#sec-ch03-05-TangentPlanes-27",
  "type": "Note",
  "number": "3.5.19",
  "title": "",
  "body": " Given a differentiable function , we saw that we can approximate this function for inputs close to by using the tangent plane to at the point ( ). That is, .  "
},
{
  "id": "sec-ch03-05-TangentPlanes-29",
  "level": "2",
  "url": "sec-ch03-05-TangentPlanes.html#sec-ch03-05-TangentPlanes-29",
  "type": "Definition",
  "number": "3.5.20",
  "title": "Linearization of a Function at a Point.",
  "body": " Linearization of a Function at a Point   Given a differentiable function , its linearization (or linear approximation) at the input ( ) is given by    "
},
{
  "id": "sec-ch03-05-TangentPlanes-30",
  "level": "2",
  "url": "sec-ch03-05-TangentPlanes.html#sec-ch03-05-TangentPlanes-30",
  "type": "Note",
  "number": "3.5.21",
  "title": "",
  "body": " Since the linearization of at an input ( ) is just the equation of the tangent plane to at that input, the main application is the same: Approximate with a simpler function.  "
},
{
  "id": "example-ch03-05-ex-11-6",
  "level": "2",
  "url": "sec-ch03-05-TangentPlanes.html#example-ch03-05-ex-11-6",
  "type": "Example",
  "number": "3.5.22",
  "title": "",
  "body": "  Find the linearization of at the input . Use this to approximate .    We first compute the value of and of its partial derivatives at the input : Substituting these into the formula for the linearization at : Since the input is close to , we can approximate by the linearization: For comparison, the exact value is , so the approximation is fairly close.   "
},
{
  "id": "sec-ch03-05-TangentPlanes-32",
  "level": "2",
  "url": "sec-ch03-05-TangentPlanes.html#sec-ch03-05-TangentPlanes-32",
  "type": "Remark",
  "number": "3.5.23",
  "title": "",
  "body": " When talking about partial derivatives, we saw the follow formulas: and .  If we want to approximate a change in a function in both coordinates, we have a similar formula.  "
},
{
  "id": "sec-ch03-05-TangentPlanes-33",
  "level": "2",
  "url": "sec-ch03-05-TangentPlanes.html#sec-ch03-05-TangentPlanes-33",
  "type": "Definition",
  "number": "3.5.24",
  "title": "Approximating Change.",
  "body": " Approximating Change   Given a differentiable function , we can approximate small changes in and using .  Sometimes, this equation is written using the total differential of , as    "
},
{
  "id": "example-ch03-05-ex-11-7",
  "level": "2",
  "url": "sec-ch03-05-TangentPlanes.html#example-ch03-05-ex-11-7",
  "type": "Example",
  "number": "3.5.25",
  "title": "",
  "body": "  The volume of a right circular cone with radius and height is . Approximate the change in the volume of the cone when the radius changes from to and the height changes from to .    Here , the radius changes from by and the height changes from by . We compute the partial derivatives of at the input : By the approximating-change formula: So the volume increases by approximately cubic units. Even though the height decreases, the change coming from the radius is larger, so the net change in the volume is positive.   "
},
{
  "id": "sec-ch03-05-TangentPlanes-35",
  "level": "2",
  "url": "sec-ch03-05-TangentPlanes.html#sec-ch03-05-TangentPlanes-35",
  "type": "Note",
  "number": "3.5.26",
  "title": "",
  "body": " This formula is useful when:     You do not have the explicit function, but you do know its rates of change.    The original function is too convoluted to work with, this approach can be more computationally efficient.     "
},
{
  "id": "sec-ch03-05-TangentPlanes-37",
  "level": "2",
  "url": "sec-ch03-05-TangentPlanes.html#sec-ch03-05-TangentPlanes-37",
  "type": "Remark",
  "number": "3.5.27",
  "title": "Linearization in Higher Dimensions.",
  "body": " Linearization in Higher Dimensions  Given a differentiable function , its linearization at the input ( ) is given by .  "
},
{
  "id": "sec-ch03-06-CriticalPoints",
  "level": "1",
  "url": "sec-ch03-06-CriticalPoints.html",
  "type": "Section",
  "number": "3.6",
  "title": "Critical Points and Analysis",
  "body": " Critical Points and Analysis   Recall from Calculus I:     A function has a local maximum at if for all in some interval .    A function has a local minimum at if for all in some interval .       A function with a local minimum on the left, with a local maximum on the right.    A local maximum of a function f(x,y) shown as the bottom of a locally bowl-shaped surface.      A local minimum of a function f(x,y) shown as the top of a locally hill-shaped surface.       The graphs above show only the plots; you can drag and zoom them. To see the expressions behind them, or to save a copy and create your own version of the graphs, open them in a new page from here: link to the left graph , link to the right graph   We have similar definitions for scalar-valued functions.   Local Minimums and Maximums   Given a function :      has a local maximum at if for all points inside some open circle of radius centered at .     has a local minimum at if for all points inside some open circle of radius centered at .        This definition says that we must compare to all points inside some open circle in the domain of . Moreover, we only need to find one such circle that works.   An open circle around a point.        The pictures below show the two local maximums and the two local minimums of the surface .     The two local max and two local min of    The surface z equals f of x and y, near a local maximum point.      The surface z equals f of x and y, near a local minimum point.       The graphs above show only the plots; you can drag and zoom them. To see the expressions behind them, or to save a copy and create your own version of the graphs, open them in a new page from here: link to the left graph , link to the right graph    In Calculus I, when working with functions of one variable , we used critical points to find local maximums\/minimums (places where the derivative is zero or doesn't exist). We will do the same thing with functions of two or more variables.    Critical Points   Given a function , we say that the interior point of the domain of is a critical point of if one of the following is true:     and .    At least one of or does not exist.           If is a critical point of due to condition 1 , this implies the tangent plane to at is horizontal.    Condition 2) is for the points that the function is not differentiable at.    If a function has a critical point at , this does not guarantee that has a local maximum\/minimum at . However, if does have a local maximum\/minimum at some point, it must occur at a critical point.        Interior and Boundary Points   Given a set in the -plane, we say that the point ( ) is an interior point of if there exists an open circle of radius centered at ( ) that is entirely inside .  Given a set in the -plane, we say that the point is a boundary point of if every open circle of radius centered at ( ) lies partly inside and partly outside of .     A region with boundary and interior points.      If the domain of a function is , then all points in its domain are interior points.     Find all critical points of the following functions:  (a) .  (b) .    Both partial derivatives exist at every point of , so the critical points come from solving and simultaneously. Computing the partial derivatives: The two partial derivatives are identical, and . Hence every point on the line is a critical point of ; that is, the critical points are all the points of the form with any real number. (Notice that , which explains why an entire line of critical points appears.)    Both partial derivatives exist at every point of : Since for every , the equation forces . Substituting into gives . Hence the only critical point of is .      Consider the function . This function has a critical point at . Does correspond to a local max, a local min, or neither?    We have , and since squares are never negative, for every point in the plane. In particular for all points inside any open circle of radius centered at , and by the definition of local minimums, has a local minimum at . In fact, since the inequality holds for every point of the plane and not just near the origin, is a global minimum: the graph of is a paraboloid opening upwards with its vertex at the origin.     Three Classifications for Critical Points  Given a function and a critical point ( ) of , only one of three things can occur:     has a local max at .    has a local min at .    has a saddle point at .       Saddle Points   Given a function has a saddle point at ( ) if for all open circles of radius centered at ( ), we can always find points and in the circle such that and .      Using the picture below, explain why the critical point of is a saddle point.   The surface z equals f of x and y, over a closed bounded region, showing the location of saddle point. The surface increases if one moves along the direction of the x-axis and decreases if one moves along the direction of the y-axis.     Graph of     We have . Consider any open circle of radius centered at . Moving away from the origin along the -axis ( ), this is the direction in the picture along which the surface increases. Moving away from the origin along the -axis ( ), this is the direction in the picture along which the surface decreases. Since every open circle centered at contains points where is larger than and points where is smaller than , the critical point is neither a maximum nor a minimum.    Given a critical point , there is an algebraic way to determine whether it corresponds to a local min, local max, or a saddle point. Unfortunately, this method is not perfect.   Second Derivative Test   Suppose you have a function and a critical point of . Let   Then:      has a local maximum at if and .     has a local minimum at if and .     has a saddle point at if .    The test is inconclusive at if .     We call the function the discriminant of .      Find and classify the critical points of .    Both partial derivatives exist at every point of , so we solve and simultaneously. Computing the partial derivatives: Setting gives or . In either case , so setting gives If then , and if then . Hence the critical points are and .  To classify them we use the Second Derivative Test. The second partial derivatives are so the discriminant is At we have , so and ; hence has a local minimum at . At we have , so ; hence has a saddle point at .    "
},
{
  "id": "sec-ch03-06-CriticalPoints-2",
  "level": "2",
  "url": "sec-ch03-06-CriticalPoints.html#sec-ch03-06-CriticalPoints-2",
  "type": "Note",
  "number": "3.6.1",
  "title": "",
  "body": " Recall from Calculus I:     A function has a local maximum at if for all in some interval .    A function has a local minimum at if for all in some interval .     "
},
{
  "id": "fig-ch03-06-local-min-max",
  "level": "2",
  "url": "sec-ch03-06-CriticalPoints.html#fig-ch03-06-local-min-max",
  "type": "Figure",
  "number": "3.6.1",
  "title": "",
  "body": " A function with a local minimum on the left, with a local maximum on the right.    A local maximum of a function f(x,y) shown as the bottom of a locally bowl-shaped surface.      A local minimum of a function f(x,y) shown as the top of a locally hill-shaped surface.      "
},
{
  "id": "sec-ch03-06-CriticalPoints-6",
  "level": "2",
  "url": "sec-ch03-06-CriticalPoints.html#sec-ch03-06-CriticalPoints-6",
  "type": "Definition",
  "number": "3.6.2",
  "title": "Local Minimums and Maximums.",
  "body": " Local Minimums and Maximums   Given a function :      has a local maximum at if for all points inside some open circle of radius centered at .     has a local minimum at if for all points inside some open circle of radius centered at .      "
},
{
  "id": "sec-ch03-06-CriticalPoints-7",
  "level": "2",
  "url": "sec-ch03-06-CriticalPoints.html#sec-ch03-06-CriticalPoints-7",
  "type": "Note",
  "number": "3.6.3",
  "title": "",
  "body": " This definition says that we must compare to all points inside some open circle in the domain of . Moreover, we only need to find one such circle that works.   An open circle around a point.     "
},
{
  "id": "example-ch03-06-ex-12-1",
  "level": "2",
  "url": "sec-ch03-06-CriticalPoints.html#example-ch03-06-ex-12-1",
  "type": "Example",
  "number": "3.6.4",
  "title": "",
  "body": "  The pictures below show the two local maximums and the two local minimums of the surface .   "
},
{
  "id": "fig-ch03-06-ex-12-1",
  "level": "2",
  "url": "sec-ch03-06-CriticalPoints.html#fig-ch03-06-ex-12-1",
  "type": "Figure",
  "number": "3.6.3",
  "title": "",
  "body": " The two local max and two local min of    The surface z equals f of x and y, near a local maximum point.      The surface z equals f of x and y, near a local minimum point.      "
},
{
  "id": "sec-ch03-06-CriticalPoints-11",
  "level": "2",
  "url": "sec-ch03-06-CriticalPoints.html#sec-ch03-06-CriticalPoints-11",
  "type": "Note",
  "number": "3.6.5",
  "title": "",
  "body": " In Calculus I, when working with functions of one variable , we used critical points to find local maximums\/minimums (places where the derivative is zero or doesn't exist). We will do the same thing with functions of two or more variables.  "
},
{
  "id": "sec-ch03-06-CriticalPoints-12",
  "level": "2",
  "url": "sec-ch03-06-CriticalPoints.html#sec-ch03-06-CriticalPoints-12",
  "type": "Definition",
  "number": "3.6.6",
  "title": "Critical Points.",
  "body": " Critical Points   Given a function , we say that the interior point of the domain of is a critical point of if one of the following is true:     and .    At least one of or does not exist.      "
},
{
  "id": "sec-ch03-06-CriticalPoints-13",
  "level": "2",
  "url": "sec-ch03-06-CriticalPoints.html#sec-ch03-06-CriticalPoints-13",
  "type": "Remark",
  "number": "3.6.7",
  "title": "",
  "body": "    If is a critical point of due to condition 1 , this implies the tangent plane to at is horizontal.    Condition 2) is for the points that the function is not differentiable at.    If a function has a critical point at , this does not guarantee that has a local maximum\/minimum at . However, if does have a local maximum\/minimum at some point, it must occur at a critical point.      "
},
{
  "id": "sec-ch03-06-CriticalPoints-14",
  "level": "2",
  "url": "sec-ch03-06-CriticalPoints.html#sec-ch03-06-CriticalPoints-14",
  "type": "Definition",
  "number": "3.6.8",
  "title": "Interior and Boundary Points.",
  "body": " Interior and Boundary Points   Given a set in the -plane, we say that the point ( ) is an interior point of if there exists an open circle of radius centered at ( ) that is entirely inside .  Given a set in the -plane, we say that the point is a boundary point of if every open circle of radius centered at ( ) lies partly inside and partly outside of .   "
},
{
  "id": "fig-ch03-06-interior-boundary",
  "level": "2",
  "url": "sec-ch03-06-CriticalPoints.html#fig-ch03-06-interior-boundary",
  "type": "Figure",
  "number": "3.6.4",
  "title": "",
  "body": " A region with boundary and interior points.    "
},
{
  "id": "sec-ch03-06-CriticalPoints-16",
  "level": "2",
  "url": "sec-ch03-06-CriticalPoints.html#sec-ch03-06-CriticalPoints-16",
  "type": "Note",
  "number": "3.6.9",
  "title": "",
  "body": " If the domain of a function is , then all points in its domain are interior points.  "
},
{
  "id": "example-ch03-06-ex-12-2",
  "level": "2",
  "url": "sec-ch03-06-CriticalPoints.html#example-ch03-06-ex-12-2",
  "type": "Example",
  "number": "3.6.10",
  "title": "",
  "body": "  Find all critical points of the following functions:  (a) .  (b) .    Both partial derivatives exist at every point of , so the critical points come from solving and simultaneously. Computing the partial derivatives: The two partial derivatives are identical, and . Hence every point on the line is a critical point of ; that is, the critical points are all the points of the form with any real number. (Notice that , which explains why an entire line of critical points appears.)    Both partial derivatives exist at every point of : Since for every , the equation forces . Substituting into gives . Hence the only critical point of is .   "
},
{
  "id": "example-ch03-06-ex-12-3",
  "level": "2",
  "url": "sec-ch03-06-CriticalPoints.html#example-ch03-06-ex-12-3",
  "type": "Example",
  "number": "3.6.11",
  "title": "",
  "body": "  Consider the function . This function has a critical point at . Does correspond to a local max, a local min, or neither?    We have , and since squares are never negative, for every point in the plane. In particular for all points inside any open circle of radius centered at , and by the definition of local minimums, has a local minimum at . In fact, since the inequality holds for every point of the plane and not just near the origin, is a global minimum: the graph of is a paraboloid opening upwards with its vertex at the origin.   "
},
{
  "id": "sec-ch03-06-CriticalPoints-19",
  "level": "2",
  "url": "sec-ch03-06-CriticalPoints.html#sec-ch03-06-CriticalPoints-19",
  "type": "Remark",
  "number": "3.6.12",
  "title": "Three Classifications for Critical Points.",
  "body": " Three Classifications for Critical Points  Given a function and a critical point ( ) of , only one of three things can occur:     has a local max at .    has a local min at .    has a saddle point at .     "
},
{
  "id": "sec-ch03-06-CriticalPoints-20",
  "level": "2",
  "url": "sec-ch03-06-CriticalPoints.html#sec-ch03-06-CriticalPoints-20",
  "type": "Definition",
  "number": "3.6.13",
  "title": "Saddle Points.",
  "body": " Saddle Points   Given a function has a saddle point at ( ) if for all open circles of radius centered at ( ), we can always find points and in the circle such that and .   "
},
{
  "id": "example-ch03-06-ex-12-4",
  "level": "2",
  "url": "sec-ch03-06-CriticalPoints.html#example-ch03-06-ex-12-4",
  "type": "Example",
  "number": "3.6.14",
  "title": "",
  "body": "  Using the picture below, explain why the critical point of is a saddle point.   The surface z equals f of x and y, over a closed bounded region, showing the location of saddle point. The surface increases if one moves along the direction of the x-axis and decreases if one moves along the direction of the y-axis.     Graph of     We have . Consider any open circle of radius centered at . Moving away from the origin along the -axis ( ), this is the direction in the picture along which the surface increases. Moving away from the origin along the -axis ( ), this is the direction in the picture along which the surface decreases. Since every open circle centered at contains points where is larger than and points where is smaller than , the critical point is neither a maximum nor a minimum.   "
},
{
  "id": "sec-ch03-06-CriticalPoints-23",
  "level": "2",
  "url": "sec-ch03-06-CriticalPoints.html#sec-ch03-06-CriticalPoints-23",
  "type": "Definition",
  "number": "3.6.15",
  "title": "Second Derivative Test.",
  "body": " Second Derivative Test   Suppose you have a function and a critical point of . Let   Then:      has a local maximum at if and .     has a local minimum at if and .     has a saddle point at if .    The test is inconclusive at if .     We call the function the discriminant of .   "
},
{
  "id": "example-ch03-06-ex-12-5",
  "level": "2",
  "url": "sec-ch03-06-CriticalPoints.html#example-ch03-06-ex-12-5",
  "type": "Example",
  "number": "3.6.16",
  "title": "",
  "body": "  Find and classify the critical points of .    Both partial derivatives exist at every point of , so we solve and simultaneously. Computing the partial derivatives: Setting gives or . In either case , so setting gives If then , and if then . Hence the critical points are and .  To classify them we use the Second Derivative Test. The second partial derivatives are so the discriminant is At we have , so and ; hence has a local minimum at . At we have , so ; hence has a saddle point at .   "
},
{
  "id": "sec-ch03-07-LagrangeMultipliers",
  "level": "1",
  "url": "sec-ch03-07-LagrangeMultipliers.html",
  "type": "Section",
  "number": "3.7",
  "title": "Constraints and Lagrange Multipliers",
  "body": " Constraints and Lagrange Multipliers   In the previous section, we found how to find local extremum of a function in the interior of its domain.  In practice, we sometimes restrict the domain of a function to a subset of its domain, and this subset sometimes will have boundaries. In this section, we will learn how to deal with these boundaries.    Before, we were interested in finding local max\/min values. Now, we will expand our search to absolute max\/min values.    Absolute Maximum and Minimum Values   Given a function , a set in its domain, and a point in , then:      has an absolute maximum in at if for all in .     has an absolute minimum in at if for all in .         Suppose we restrict the domain of the function to the set . Under this restriction, has an absolute maximum at the point )and an absolute minimum at the point , as shown below.     The plane z equals, y minus x, all over 4, restricted on the domain 1 over 2 less or equal to y less or equal to 3 over 2 and 0 less or equal to x less or equal to 3 over 2.      Method of Lagrange Multipliers  Given a surface (called the objective function), we will look at domain restrictions (called constraints) of the form .     Note that is a curve in the -plane (since it is intersected with ).    We will require that all of the curve is in the interior of the domain of .        Below we have the function restricted (constrained) to points from the curve .  Write this constraint in the form .   The plane z equals, y minus x, all over 4, and the circle that corresponds to the restricted domain of the circle, on the xy-plane, centred at (2,2) with radius 1.          To write the constraint in the form we move everything to one side of the equation. Subtracting from both sides of gives so the constraint is . Note that the curve is the circle of radius centred at in the -plane, which lies entirely in the interior of the domain of (the whole plane).    Now, we give a method to find the absolute values of a surface subject to a constraint of the form .   Method of Lagrange Multipliers   Suppose you want to find the absolute values of a differentiable function subject to the domain restriction . If is a smooth curve and for all points on , then we can find these absolute values as follows:     Find values of , and (called a Lagrange multiplier) such that .    Evaluate at the values found in step 1 and at the endpoints of , if they exist (for example, if is a line segment).    The largest and smallest values you found in part (b) are the absolute max and min values of , respectively, restricted to .        When we say is smooth, we mean that it is differentiable (has no sharp edges and doesn't intersect itself).    Examples of smooth and non smooth curves    From left to right: the circle, x plus 6, squared, plus y squared equals 2, and the parabola y equals, x plus 3, squared, both smooth curves, then the graph of y equals the absolute value of x minus 3 with a sharp corner at x equals 3 and a cycloid curve, both not smooth.       A curve is smooth when it is differentiable everywhere: it has no sharp corners and it does not intersect itself. The circle and the parabola are smooth curves, since at every point they have a well-defined tangent line. The graph of is not smooth because of the sharp corner, where no tangent line exists. A cycloid curve is not smooth because it has a cusp.      Using the method of Lagrange multipliers, find the absolute max\/min values of subject to the constraint .   The surface z equals x squared minus y squared, and the curve on it over the restricted domain y equals 2 x, for negative 1 over 2 less or equal to x less or equal to 1 over 2.          We first write the constraint in the form : from we get . The gradients are and , so the system together with the constraint reads The first equation gives ; substituting into the second gives . Combining with the constraint we get , and then . This gives the single candidate .  Since the constraint is a line segment, we must also evaluate at its endpoints, and , that is at the points and . Evaluating at all of the candidates: The segment contains its endpoints and is bounded, so the Extreme Value theorem applies: the absolute maximum is at and the absolute minimum is , attained at both and .       Find the absolute values of the objective function where and lie on the circle given by .   The plane z equals x over 5 plus y over 2, and the circle constraint, along with the curve of the plane corresponding to the constraint.          We write the constraint as . The gradients are and , so the system together with the constraint reads The left sides of the first two equations are nonzero, so none of , , or can be zero. We may therefore solve each of the first two equations for : Setting these two expressions equal to each other eliminates and gives a relation between and : Substituting into the constraint : and the corresponding . This produces the two candidates and .    It remains to evaluate at the two candidates found in : The circle has no endpoints and is bounded, so the Extreme Value theorem applies: the absolute maximum is at and the absolute minimum is at .     In and , we could see from the pictures that the values we found are the only absolute values.   In practice, how can we know if we found the correct (and only) absolute values? We can use a theorem called the Extreme Value theorem.   The Extreme Value Theorem   Let be differentiable and be a differentiable curve inside the domain of . If the curve :     Contains its endpoints (if they exist)    and is bounded (you can put it inside a circle of finite radius)  then the differentiable function will have absolute values on .        If the conditions for the Extreme Value theorem hold, then the method of Lagrange multipliers will find the absolute max\/min values of restricted to . If any of the two conditions above doesn't hold, then the method of Lagrange multipliers will only find local extremum.    Combining Boundaries and Interiors  Suppose that the (differentiable) function is constraint by the (differentiable) curve enclosing a region in the -plane (we call such curves simple and closed).  Then we can combine the method of Lagrange multipliers with critical point analysis to find the absolute values of on and .   The simple and closed curve x squared plus y squared equals 1, enclosing a region S.     The simple and closed curve (dark green) enclosing a region (light green)    The method is as follows:     Find candidates for absolute values on (the boundary) using the method of Lagrange multipliers.    Find candidates for absolute values on the region (the region enclosed by , excluding the boundary).    Evaluate at all of these points. The largest is the absolute max and the smallest the absolute min.      Important: The Extreme Value theorem applies to regions described in the previous note (regions enclosed by a simple and closed curve including its interior).     Find the absolute max and min values (if they exist) of restricted to .    The region consists of the ellipse (the boundary) together with its interior, so it is a region enclosed by a simple and closed curve including its interior; the Extreme Value theorem guarantees that the absolute max\/min values exist. We combine critical point analysis in the interior with the method of Lagrange multipliers on the boundary.   Interior. A critical point of in the interior is a point where the gradient vanishes. Since , we set each component to zero: The only critical point is , and it satisfies , so it lies strictly inside and is a valid candidate. To classify it we apply the Second Derivative Test. The second-order partials are so the discriminant is . Since and , the critical point is a local minimum, with value .     Boundary. We write the constraint as , with . The system together with the constraint reads We solve each of the first two equations for . Moving everything to one side and factoring, A single value of must satisfy both equations at once, but and cannot both hold. Eliminating this way rules out and occurring together, so at least one of is zero (and both cannot be zero, since does not satisfy the constraint). This leaves two cases:  If , the constraint gives , producing the candidates and .  If , the constraint gives , producing the candidates and .    We now evaluate at the interior candidate and at all of the boundary candidates: Comparing the values , , and : the absolute maximum of on is , attained at and on the boundary, and the absolute minimum is , attained at the interior critical point . Note that the smallest value on the boundary, at , is not the absolute minimum of on  the minimum occurs in the interior, which is why the critical point analysis step cannot be skipped.   The restricted surface of the paraboloid f of x and y equals 4 x squared plus y squared plus one, on the ellipse x squared plus 4 y squared is smaller or equal to 1.       The method of Lagrange multipliers extends easily to higher dimensions.   Lagrange Multipliers in Higher Dimensions  Suppose you want to maximize or minimize the function subject to the constraint . Then solve the system     Example 4.44 of the book   Find the absolute max and min values (if they exist) of subject to the constraint .(Since the restriction is not a bounded set, assume that the point found with the use of the Lagrange Multipliers method must be either an absolute maximum or minimum for this example.)    We write the constraint as . The gradients are and , so the system together with the constraint reads The first three equations give . Substituting into the constraint: so the only candidate is , with Since the plane is not a bounded set, the Extreme Value theorem does not apply, and as stated in the problem we assume that the candidate found in must be either an absolute maximum or an absolute minimum. To decide which, we compare with another point on the constraint, say : so is the absolute minimum, with value . There is no absolute maximum: the points lie on the plane for every value of , and becomes arbitrarily large as grows.     Checkpoint 4.38 of the book   A company has determined that its production level is given by the Cobb-Douglas function where represents the total number of labour hours in 1 year and y represents the total capital input for the company. Suppose 1 unit of labour costs $40 and 1 unit of capital costs $50. Use the method of Lagrange multipliers to find the maximum value of subject to a budgetary constraint of $500,000 per year.    The total cost of units of labour and units of capital is dollars, so the budgetary constraint is . One can reasonably assume that and cannot be negative due to representing non-negative physical values. That in terms imply that and . Now with these restrictions the line segment of is bounded.  We write as . The partial derivatives of the objective function, which exist only for the positive values of and , are so the system together with the constraint reads . Now solving for produces the following     Substituting into the budgetary constraint: and then The value of the production level at that point is . At the end points and the function takes the value .  So the production level is maximized when the company uses labour hours and units of capital, and the maximum value of subject to the budgetary constraint is that is, a maximum production level of approximately units.    "
},
{
  "id": "sec-ch03-07-LagrangeMultipliers-2",
  "level": "2",
  "url": "sec-ch03-07-LagrangeMultipliers.html#sec-ch03-07-LagrangeMultipliers-2",
  "type": "Note",
  "number": "3.7.1",
  "title": "",
  "body": " In the previous section, we found how to find local extremum of a function in the interior of its domain.  In practice, we sometimes restrict the domain of a function to a subset of its domain, and this subset sometimes will have boundaries. In this section, we will learn how to deal with these boundaries.  "
},
{
  "id": "sec-ch03-07-LagrangeMultipliers-3",
  "level": "2",
  "url": "sec-ch03-07-LagrangeMultipliers.html#sec-ch03-07-LagrangeMultipliers-3",
  "type": "Note",
  "number": "3.7.2",
  "title": "",
  "body": " Before, we were interested in finding local max\/min values. Now, we will expand our search to absolute max\/min values.  "
},
{
  "id": "sec-ch03-07-LagrangeMultipliers-4",
  "level": "2",
  "url": "sec-ch03-07-LagrangeMultipliers.html#sec-ch03-07-LagrangeMultipliers-4",
  "type": "Definition",
  "number": "3.7.3",
  "title": "Absolute Maximum and Minimum Values.",
  "body": " Absolute Maximum and Minimum Values   Given a function , a set in its domain, and a point in , then:      has an absolute maximum in at if for all in .     has an absolute minimum in at if for all in .      "
},
{
  "id": "example-ch03-07-ex-13-1",
  "level": "2",
  "url": "sec-ch03-07-LagrangeMultipliers.html#example-ch03-07-ex-13-1",
  "type": "Example",
  "number": "3.7.4",
  "title": "",
  "body": "  Suppose we restrict the domain of the function to the set . Under this restriction, has an absolute maximum at the point )and an absolute minimum at the point , as shown below.   "
},
{
  "id": "fig-ch03-07-ex-13-1",
  "level": "2",
  "url": "sec-ch03-07-LagrangeMultipliers.html#fig-ch03-07-ex-13-1",
  "type": "Figure",
  "number": "3.7.1",
  "title": "",
  "body": " The plane z equals, y minus x, all over 4, restricted on the domain 1 over 2 less or equal to y less or equal to 3 over 2 and 0 less or equal to x less or equal to 3 over 2.    "
},
{
  "id": "sec-ch03-07-LagrangeMultipliers-7",
  "level": "2",
  "url": "sec-ch03-07-LagrangeMultipliers.html#sec-ch03-07-LagrangeMultipliers-7",
  "type": "Remark",
  "number": "3.7.5",
  "title": "Method of Lagrange Multipliers.",
  "body": " Method of Lagrange Multipliers  Given a surface (called the objective function), we will look at domain restrictions (called constraints) of the form .     Note that is a curve in the -plane (since it is intersected with ).    We will require that all of the curve is in the interior of the domain of .     "
},
{
  "id": "example-ch03-07-ex-13-2",
  "level": "2",
  "url": "sec-ch03-07-LagrangeMultipliers.html#example-ch03-07-ex-13-2",
  "type": "Example",
  "number": "3.7.6",
  "title": "",
  "body": "  Below we have the function restricted (constrained) to points from the curve .  Write this constraint in the form .   The plane z equals, y minus x, all over 4, and the circle that corresponds to the restricted domain of the circle, on the xy-plane, centred at (2,2) with radius 1.          To write the constraint in the form we move everything to one side of the equation. Subtracting from both sides of gives so the constraint is . Note that the curve is the circle of radius centred at in the -plane, which lies entirely in the interior of the domain of (the whole plane).   "
},
{
  "id": "sec-ch03-07-LagrangeMultipliers-10",
  "level": "2",
  "url": "sec-ch03-07-LagrangeMultipliers.html#sec-ch03-07-LagrangeMultipliers-10",
  "type": "Definition",
  "number": "3.7.7",
  "title": "Method of Lagrange Multipliers.",
  "body": " Method of Lagrange Multipliers   Suppose you want to find the absolute values of a differentiable function subject to the domain restriction . If is a smooth curve and for all points on , then we can find these absolute values as follows:     Find values of , and (called a Lagrange multiplier) such that .    Evaluate at the values found in step 1 and at the endpoints of , if they exist (for example, if is a line segment).    The largest and smallest values you found in part (b) are the absolute max and min values of , respectively, restricted to .      "
},
{
  "id": "sec-ch03-07-LagrangeMultipliers-11",
  "level": "2",
  "url": "sec-ch03-07-LagrangeMultipliers.html#sec-ch03-07-LagrangeMultipliers-11",
  "type": "Note",
  "number": "3.7.8",
  "title": "",
  "body": " When we say is smooth, we mean that it is differentiable (has no sharp edges and doesn't intersect itself).  "
},
{
  "id": "example-ch03-07-ex-13-3",
  "level": "2",
  "url": "sec-ch03-07-LagrangeMultipliers.html#example-ch03-07-ex-13-3",
  "type": "Example",
  "number": "3.7.9",
  "title": "Examples of smooth and non smooth curves.",
  "body": " Examples of smooth and non smooth curves    From left to right: the circle, x plus 6, squared, plus y squared equals 2, and the parabola y equals, x plus 3, squared, both smooth curves, then the graph of y equals the absolute value of x minus 3 with a sharp corner at x equals 3 and a cycloid curve, both not smooth.       A curve is smooth when it is differentiable everywhere: it has no sharp corners and it does not intersect itself. The circle and the parabola are smooth curves, since at every point they have a well-defined tangent line. The graph of is not smooth because of the sharp corner, where no tangent line exists. A cycloid curve is not smooth because it has a cusp.   "
},
{
  "id": "example-ch03-07-ex-13-4",
  "level": "2",
  "url": "sec-ch03-07-LagrangeMultipliers.html#example-ch03-07-ex-13-4",
  "type": "Example",
  "number": "3.7.10",
  "title": "",
  "body": "  Using the method of Lagrange multipliers, find the absolute max\/min values of subject to the constraint .   The surface z equals x squared minus y squared, and the curve on it over the restricted domain y equals 2 x, for negative 1 over 2 less or equal to x less or equal to 1 over 2.          We first write the constraint in the form : from we get . The gradients are and , so the system together with the constraint reads The first equation gives ; substituting into the second gives . Combining with the constraint we get , and then . This gives the single candidate .  Since the constraint is a line segment, we must also evaluate at its endpoints, and , that is at the points and . Evaluating at all of the candidates: The segment contains its endpoints and is bounded, so the Extreme Value theorem applies: the absolute maximum is at and the absolute minimum is , attained at both and .   "
},
{
  "id": "example-ch03-07-ex-13-5",
  "level": "2",
  "url": "sec-ch03-07-LagrangeMultipliers.html#example-ch03-07-ex-13-5",
  "type": "Example",
  "number": "3.7.11",
  "title": "",
  "body": "  Find the absolute values of the objective function where and lie on the circle given by .   The plane z equals x over 5 plus y over 2, and the circle constraint, along with the curve of the plane corresponding to the constraint.          We write the constraint as . The gradients are and , so the system together with the constraint reads The left sides of the first two equations are nonzero, so none of , , or can be zero. We may therefore solve each of the first two equations for : Setting these two expressions equal to each other eliminates and gives a relation between and : Substituting into the constraint : and the corresponding . This produces the two candidates and .    It remains to evaluate at the two candidates found in : The circle has no endpoints and is bounded, so the Extreme Value theorem applies: the absolute maximum is at and the absolute minimum is at .   "
},
{
  "id": "sec-ch03-07-LagrangeMultipliers-15",
  "level": "2",
  "url": "sec-ch03-07-LagrangeMultipliers.html#sec-ch03-07-LagrangeMultipliers-15",
  "type": "Remark",
  "number": "3.7.12",
  "title": "",
  "body": " In and , we could see from the pictures that the values we found are the only absolute values.  "
},
{
  "id": "sec-ch03-07-LagrangeMultipliers-17",
  "level": "2",
  "url": "sec-ch03-07-LagrangeMultipliers.html#sec-ch03-07-LagrangeMultipliers-17",
  "type": "Theorem",
  "number": "3.7.13",
  "title": "The Extreme Value Theorem.",
  "body": " The Extreme Value Theorem   Let be differentiable and be a differentiable curve inside the domain of . If the curve :     Contains its endpoints (if they exist)    and is bounded (you can put it inside a circle of finite radius)  then the differentiable function will have absolute values on .      "
},
{
  "id": "sec-ch03-07-LagrangeMultipliers-18",
  "level": "2",
  "url": "sec-ch03-07-LagrangeMultipliers.html#sec-ch03-07-LagrangeMultipliers-18",
  "type": "Remark",
  "number": "3.7.14",
  "title": "",
  "body": " If the conditions for the Extreme Value theorem hold, then the method of Lagrange multipliers will find the absolute max\/min values of restricted to . If any of the two conditions above doesn't hold, then the method of Lagrange multipliers will only find local extremum.  "
},
{
  "id": "sec-ch03-07-LagrangeMultipliers-19",
  "level": "2",
  "url": "sec-ch03-07-LagrangeMultipliers.html#sec-ch03-07-LagrangeMultipliers-19",
  "type": "Note",
  "number": "3.7.15",
  "title": "Combining Boundaries and Interiors.",
  "body": " Combining Boundaries and Interiors  Suppose that the (differentiable) function is constraint by the (differentiable) curve enclosing a region in the -plane (we call such curves simple and closed).  Then we can combine the method of Lagrange multipliers with critical point analysis to find the absolute values of on and .   The simple and closed curve x squared plus y squared equals 1, enclosing a region S.     The simple and closed curve (dark green) enclosing a region (light green)  "
},
{
  "id": "sec-ch03-07-LagrangeMultipliers-20",
  "level": "2",
  "url": "sec-ch03-07-LagrangeMultipliers.html#sec-ch03-07-LagrangeMultipliers-20",
  "type": "Remark",
  "number": "3.7.16",
  "title": "",
  "body": " The method is as follows:     Find candidates for absolute values on (the boundary) using the method of Lagrange multipliers.    Find candidates for absolute values on the region (the region enclosed by , excluding the boundary).    Evaluate at all of these points. The largest is the absolute max and the smallest the absolute min.      Important: The Extreme Value theorem applies to regions described in the previous note (regions enclosed by a simple and closed curve including its interior).  "
},
{
  "id": "example-ch03-07-ex-13-6",
  "level": "2",
  "url": "sec-ch03-07-LagrangeMultipliers.html#example-ch03-07-ex-13-6",
  "type": "Example",
  "number": "3.7.17",
  "title": "",
  "body": "  Find the absolute max and min values (if they exist) of restricted to .    The region consists of the ellipse (the boundary) together with its interior, so it is a region enclosed by a simple and closed curve including its interior; the Extreme Value theorem guarantees that the absolute max\/min values exist. We combine critical point analysis in the interior with the method of Lagrange multipliers on the boundary.   Interior. A critical point of in the interior is a point where the gradient vanishes. Since , we set each component to zero: The only critical point is , and it satisfies , so it lies strictly inside and is a valid candidate. To classify it we apply the Second Derivative Test. The second-order partials are so the discriminant is . Since and , the critical point is a local minimum, with value .     Boundary. We write the constraint as , with . The system together with the constraint reads We solve each of the first two equations for . Moving everything to one side and factoring, A single value of must satisfy both equations at once, but and cannot both hold. Eliminating this way rules out and occurring together, so at least one of is zero (and both cannot be zero, since does not satisfy the constraint). This leaves two cases:  If , the constraint gives , producing the candidates and .  If , the constraint gives , producing the candidates and .    We now evaluate at the interior candidate and at all of the boundary candidates: Comparing the values , , and : the absolute maximum of on is , attained at and on the boundary, and the absolute minimum is , attained at the interior critical point . Note that the smallest value on the boundary, at , is not the absolute minimum of on  the minimum occurs in the interior, which is why the critical point analysis step cannot be skipped.   The restricted surface of the paraboloid f of x and y equals 4 x squared plus y squared plus one, on the ellipse x squared plus 4 y squared is smaller or equal to 1.      "
},
{
  "id": "sec-ch03-07-LagrangeMultipliers-23",
  "level": "2",
  "url": "sec-ch03-07-LagrangeMultipliers.html#sec-ch03-07-LagrangeMultipliers-23",
  "type": "Remark",
  "number": "3.7.18",
  "title": "Lagrange Multipliers in Higher Dimensions.",
  "body": " Lagrange Multipliers in Higher Dimensions  Suppose you want to maximize or minimize the function subject to the constraint . Then solve the system   "
},
{
  "id": "example-ch03-07-ex-13-7",
  "level": "2",
  "url": "sec-ch03-07-LagrangeMultipliers.html#example-ch03-07-ex-13-7",
  "type": "Example",
  "number": "3.7.19",
  "title": "Example 4.44 of the book.",
  "body": " Example 4.44 of the book   Find the absolute max and min values (if they exist) of subject to the constraint .(Since the restriction is not a bounded set, assume that the point found with the use of the Lagrange Multipliers method must be either an absolute maximum or minimum for this example.)    We write the constraint as . The gradients are and , so the system together with the constraint reads The first three equations give . Substituting into the constraint: so the only candidate is , with Since the plane is not a bounded set, the Extreme Value theorem does not apply, and as stated in the problem we assume that the candidate found in must be either an absolute maximum or an absolute minimum. To decide which, we compare with another point on the constraint, say : so is the absolute minimum, with value . There is no absolute maximum: the points lie on the plane for every value of , and becomes arbitrarily large as grows.   "
},
{
  "id": "example-ch03-07-ex-13-8",
  "level": "2",
  "url": "sec-ch03-07-LagrangeMultipliers.html#example-ch03-07-ex-13-8",
  "type": "Example",
  "number": "3.7.20",
  "title": "Checkpoint 4.38 of the book.",
  "body": " Checkpoint 4.38 of the book   A company has determined that its production level is given by the Cobb-Douglas function where represents the total number of labour hours in 1 year and y represents the total capital input for the company. Suppose 1 unit of labour costs $40 and 1 unit of capital costs $50. Use the method of Lagrange multipliers to find the maximum value of subject to a budgetary constraint of $500,000 per year.    The total cost of units of labour and units of capital is dollars, so the budgetary constraint is . One can reasonably assume that and cannot be negative due to representing non-negative physical values. That in terms imply that and . Now with these restrictions the line segment of is bounded.  We write as . The partial derivatives of the objective function, which exist only for the positive values of and , are so the system together with the constraint reads . Now solving for produces the following     Substituting into the budgetary constraint: and then The value of the production level at that point is . At the end points and the function takes the value .  So the production level is maximized when the company uses labour hours and units of capital, and the maximum value of subject to the budgetary constraint is that is, a maximum production level of approximately units.   "
},
{
  "id": "sec-ch04-01-ArcLength",
  "level": "1",
  "url": "sec-ch04-01-ArcLength.html",
  "type": "Section",
  "number": "4.1",
  "title": "Arc Length",
  "body": " Arc Length   Given a curve , we will derive a formula for calculating the length of . First, we will talk about integrability.    Integrability of Curves   Given a curve , then   Hence, is integrable on if and only if each of its components is integrable (continuous) on .      Compute .    By the definition of integrability of curves, we integrate component-wise. For the first component: For the second component: Hence      Given is NOT computing the net area bounded by the curve and the -plane (there is a way to do this which we will talk about later).  What computes is a displacement vector.    Displacement Vector   Given an integrable curve , then gives a displacement vector with starting point at the endpoint of and ending point at the endpoint of .  Moreover, gives the displacement from the endpoint of to the endpoint of .     Two vectors, r of a and r of b, sharing a common starting point A, with endpoints C and B respectively, and the displacement vector r of b minus r of a, drawn connecting point C to point B.      When we say the displacement from the endpoint of to the endpoint of , in the above image, the distance between points B and C (NOT the distance along ).     Below is the graph of . You can see the displacement vector from the endpoint of to the endpoint of .  Compare this to travelling from the endpoint to the endpoint of along colored in light blue.   The curve given by x equals t and y equals the natural log of the cosine of, t minus pi over 2, plus 1, for t strictly between 0 and pi, with the arc length and the straight-line displacement both shown between the same two points on the curve.         Suppose that a curve satisfies . Find the displacement of a particle moving along from to .    By the definition of the displacement vector, we integrate component-wise: The displacement of the particle is the magnitude of this displacement vector:      Recall that integrals show up when we are summing up infinitely many things that are becoming infinitely small.   For example, given an integrable function calculates the net area bounded by and the -axis on by adding areas of rectangles that are becoming infinitely small.   Area of approximated with rectangles     The area under the curve y equals the square root of x, approximated using 8 rectangles.      The area under the curve y equals the square root of x, approximated using 16 rectangles.        The area under the curve y equals the square root of x, approximated using 64 rectangles.        The graphs above show only the plots; you can drag and zoom them. To see the expressions behind them, or to save a copy and create your own version of the graphs, open them in a new page from here: link to the top left graph , link to the top right graph , link to the bottom graph   To find the length of a curve (its length) on the interval , we use a similar idea:  Partition the curve into line segments, and add the length of each line segment to approximate the length of .   Length of approximated with line segments     The arc length of the curve y equals cosine of t, approximated using 8 line segments.      The arc length of the curve y equals cosine of t, approximated using 16 line segments.        The arc length of the curve y equals cosine of t, approximated using 64 line segments.        The graphs above show only the plots; you can drag and zoom them. To see the expressions behind them, or to save a copy and create your own version of the graphs, open them in a new page from here: link to the top left graph , link to the top right graph , link to the bottom graph   As with area, as the number of line segments approaches infinity (their lengths become infinitely small), we will get a better approximation of the arc length.   Length of a Curve (Arc length)   Consider a curve , where , and are continuous on and the curve is traversed only once on . Then the arclength of the curve between ( ) and ( ) is       A glider is soaring upward along the helix . How long is the glider's path from to ?   The helix given by x equals 0.98 cosine of t, y equals 0.98 sine of t, z equals t times the square root of, 1 minus 0.98 squared, in xyz-space, with an arrow from the origin to a point on the curve.       The length of the glider's path is the arc length of from to . First we compute the derivative and its magnitude: Hence The glider moves with constant speed , so the length of its path equals the elapsed time .     Displacement vs Arclength  It is important not to confuse displacement with arclength. Here we summarize both:      is computing the displacement (straight line distance) from the endpoint of to the endpoint of .     is computing the arc length (distance travelled along ) from the endpoint of to the endpoint of .        Below is the graph of . Calculate the displacement vector from the endpoint of to the endpoint of .  Compare this to the length of the curve from the endpoint to the endpoint of along colored in light blue.   The curve given by x equals t and y equals the natural log of the cosine of, t minus pi over 2, plus 1, for t strictly between 0 and pi, with the arc length and the straight-line displacement both shown between the same two points on the curve.       First we find the two endpoints. At : At , using : The displacement vector from the first endpoint to the second is their difference: so the displacement (straight line distance) is .    For the length of the curve we differentiate, using the chain rule on the second component: where we dropped the absolute value since lies in , which is inside where the secant is positive. Hence using and . Numerically the arc length is , which is larger than the displacement , as expected: the straight line is the shortest path between the two endpoints.    "
},
{
  "id": "sec-ch04-01-ArcLength-2",
  "level": "2",
  "url": "sec-ch04-01-ArcLength.html#sec-ch04-01-ArcLength-2",
  "type": "Note",
  "number": "4.1.1",
  "title": "",
  "body": " Given a curve , we will derive a formula for calculating the length of . First, we will talk about integrability.  "
},
{
  "id": "sec-ch04-01-ArcLength-3",
  "level": "2",
  "url": "sec-ch04-01-ArcLength.html#sec-ch04-01-ArcLength-3",
  "type": "Definition",
  "number": "4.1.2",
  "title": "Integrability of Curves.",
  "body": " Integrability of Curves   Given a curve , then   Hence, is integrable on if and only if each of its components is integrable (continuous) on .   "
},
{
  "id": "example-ch04-01-ex-14-1",
  "level": "2",
  "url": "sec-ch04-01-ArcLength.html#example-ch04-01-ex-14-1",
  "type": "Example",
  "number": "4.1.3",
  "title": "",
  "body": "  Compute .    By the definition of integrability of curves, we integrate component-wise. For the first component: For the second component: Hence    "
},
{
  "id": "sec-ch04-01-ArcLength-5",
  "level": "2",
  "url": "sec-ch04-01-ArcLength.html#sec-ch04-01-ArcLength-5",
  "type": "Remark",
  "number": "4.1.4",
  "title": "",
  "body": " Given is NOT computing the net area bounded by the curve and the -plane (there is a way to do this which we will talk about later).  What computes is a displacement vector.  "
},
{
  "id": "sec-ch04-01-ArcLength-6",
  "level": "2",
  "url": "sec-ch04-01-ArcLength.html#sec-ch04-01-ArcLength-6",
  "type": "Definition",
  "number": "4.1.5",
  "title": "Displacement Vector.",
  "body": " Displacement Vector   Given an integrable curve , then gives a displacement vector with starting point at the endpoint of and ending point at the endpoint of .  Moreover, gives the displacement from the endpoint of to the endpoint of .   "
},
{
  "id": "fig-ch04-01-displacement-vector",
  "level": "2",
  "url": "sec-ch04-01-ArcLength.html#fig-ch04-01-displacement-vector",
  "type": "Figure",
  "number": "4.1.1",
  "title": "",
  "body": " Two vectors, r of a and r of b, sharing a common starting point A, with endpoints C and B respectively, and the displacement vector r of b minus r of a, drawn connecting point C to point B.    "
},
{
  "id": "sec-ch04-01-ArcLength-8",
  "level": "2",
  "url": "sec-ch04-01-ArcLength.html#sec-ch04-01-ArcLength-8",
  "type": "Remark",
  "number": "4.1.6",
  "title": "",
  "body": " When we say the displacement from the endpoint of to the endpoint of , in the above image, the distance between points B and C (NOT the distance along ).  "
},
{
  "id": "example-ch04-01-ex-14-2",
  "level": "2",
  "url": "sec-ch04-01-ArcLength.html#example-ch04-01-ex-14-2",
  "type": "Example",
  "number": "4.1.7",
  "title": "",
  "body": "  Below is the graph of . You can see the displacement vector from the endpoint of to the endpoint of .  Compare this to travelling from the endpoint to the endpoint of along colored in light blue.   The curve given by x equals t and y equals the natural log of the cosine of, t minus pi over 2, plus 1, for t strictly between 0 and pi, with the arc length and the straight-line displacement both shown between the same two points on the curve.      "
},
{
  "id": "example-ch04-01-ex-14-3",
  "level": "2",
  "url": "sec-ch04-01-ArcLength.html#example-ch04-01-ex-14-3",
  "type": "Example",
  "number": "4.1.8",
  "title": "",
  "body": "  Suppose that a curve satisfies . Find the displacement of a particle moving along from to .    By the definition of the displacement vector, we integrate component-wise: The displacement of the particle is the magnitude of this displacement vector:    "
},
{
  "id": "sec-ch04-01-ArcLength-11",
  "level": "2",
  "url": "sec-ch04-01-ArcLength.html#sec-ch04-01-ArcLength-11",
  "type": "Note",
  "number": "4.1.9",
  "title": "",
  "body": " Recall that integrals show up when we are summing up infinitely many things that are becoming infinitely small.  "
},
{
  "id": "fig-ch04-01-area-rectangles",
  "level": "2",
  "url": "sec-ch04-01-ArcLength.html#fig-ch04-01-area-rectangles",
  "type": "Figure",
  "number": "4.1.3",
  "title": "",
  "body": " Area of approximated with rectangles     The area under the curve y equals the square root of x, approximated using 8 rectangles.      The area under the curve y equals the square root of x, approximated using 16 rectangles.        The area under the curve y equals the square root of x, approximated using 64 rectangles.       "
},
{
  "id": "fig-ch04-01-length-segments",
  "level": "2",
  "url": "sec-ch04-01-ArcLength.html#fig-ch04-01-length-segments",
  "type": "Figure",
  "number": "4.1.4",
  "title": "",
  "body": " Length of approximated with line segments     The arc length of the curve y equals cosine of t, approximated using 8 line segments.      The arc length of the curve y equals cosine of t, approximated using 16 line segments.        The arc length of the curve y equals cosine of t, approximated using 64 line segments.       "
},
{
  "id": "sec-ch04-01-ArcLength-20",
  "level": "2",
  "url": "sec-ch04-01-ArcLength.html#sec-ch04-01-ArcLength-20",
  "type": "Definition",
  "number": "4.1.10",
  "title": "Length of a Curve (Arc length).",
  "body": " Length of a Curve (Arc length)   Consider a curve , where , and are continuous on and the curve is traversed only once on . Then the arclength of the curve between ( ) and ( ) is    "
},
{
  "id": "example-ch04-01-ex-14-4",
  "level": "2",
  "url": "sec-ch04-01-ArcLength.html#example-ch04-01-ex-14-4",
  "type": "Example",
  "number": "4.1.11",
  "title": "",
  "body": "  A glider is soaring upward along the helix . How long is the glider's path from to ?   The helix given by x equals 0.98 cosine of t, y equals 0.98 sine of t, z equals t times the square root of, 1 minus 0.98 squared, in xyz-space, with an arrow from the origin to a point on the curve.       The length of the glider's path is the arc length of from to . First we compute the derivative and its magnitude: Hence The glider moves with constant speed , so the length of its path equals the elapsed time .   "
},
{
  "id": "sec-ch04-01-ArcLength-22",
  "level": "2",
  "url": "sec-ch04-01-ArcLength.html#sec-ch04-01-ArcLength-22",
  "type": "Remark",
  "number": "4.1.12",
  "title": "Displacement vs Arclength.",
  "body": " Displacement vs Arclength  It is important not to confuse displacement with arclength. Here we summarize both:      is computing the displacement (straight line distance) from the endpoint of to the endpoint of .     is computing the arc length (distance travelled along ) from the endpoint of to the endpoint of .     "
},
{
  "id": "example-ch04-01-ex-14-5",
  "level": "2",
  "url": "sec-ch04-01-ArcLength.html#example-ch04-01-ex-14-5",
  "type": "Example",
  "number": "4.1.13",
  "title": "",
  "body": "  Below is the graph of . Calculate the displacement vector from the endpoint of to the endpoint of .  Compare this to the length of the curve from the endpoint to the endpoint of along colored in light blue.   The curve given by x equals t and y equals the natural log of the cosine of, t minus pi over 2, plus 1, for t strictly between 0 and pi, with the arc length and the straight-line displacement both shown between the same two points on the curve.       First we find the two endpoints. At : At , using : The displacement vector from the first endpoint to the second is their difference: so the displacement (straight line distance) is .    For the length of the curve we differentiate, using the chain rule on the second component: where we dropped the absolute value since lies in , which is inside where the secant is positive. Hence using and . Numerically the arc length is , which is larger than the displacement , as expected: the straight line is the shortest path between the two endpoints.   "
},
{
  "id": "sec-ch04-02-ScalarLineIntegrals",
  "level": "1",
  "url": "sec-ch04-02-ScalarLineIntegrals.html",
  "type": "Section",
  "number": "4.2",
  "title": "Scalar Line Integrals",
  "body": " Scalar Line Integrals   As we saw in Calculus I, given an integrable function calculates the net area bounded by and the -axis on .  In this section, we will find a way to find the net area bounded by a surface and the -plane, restricted to a curve in its domain.     Below you can see the net area (in light green) bounded by the surface (in purple), restricted to the curve (in blue).   A curve C in xyz-space with a scalar function f(x,y,z) evaluated along it, illustrating the scalar line integral.        You can interpret this as finding the net area of a wall with height given by .    Arc Length as a Function  Suppose you have an integrable curve on (that is traversed only once). For any , we can calculate the arc length of the curve on using the formula   Moreover, by the Fundamental Theorem of Calculus, we have that .  Equivalently, .   Equation is what we call the arc length differential.  Now, we are ready to find the net area bounded by and the -plane restricted to the curve .  We will do the same thing we did in Calculus I: we will find the net area by adding net areas of rectangles and taking a limit at the end.   The more rectangles we use, the better the approximation    The net area bounded by f on R, approximated using 8 rectangles.      The net area bounded by f on R, approximated using 16 rectangles.      The net area bounded by f on R, approximated using 32 rectangles.       The graphs above show only the plots; you can drag and zoom them. To see the expressions behind them, or to save a copy and create your own version of the graphs, open them in a new page from here: link to the left graph , link to the middle graph , link to the right graph   The first thing we do is partition the curve into pieces. Each piece will correspond to the base of a rectangle.   Openstax Calculus 3, Section 6.2   A curve segment partitioned into smaller pieces.   A curve segment partitioned into smaller pieces.     The curve (in blue) partitioned into pieces of length (from OpenStax Vol 3)  Each rectangle has base length and height , where is a point on the -th piece of the .  Hence, an approximation for the net area is given by .  Finally, as we saw in the picture above (and know from Calculus I), if we let approach infinity (the number of rectangles), the approximation will improve. Hence, if exists, this is how we define the net area and we call this infinite sum a line integral.   Scalar Line Integral   Suppose you have a surface defined on a smooth curve given by . The line integral of over is provided that the limit exists. If the limit exists, we say that is integrable on .     As in previous examples, being smooth means that it is differentiable (has no sharp edges and doesn't cross\/intersect itself).  From our work in the first remark, we know that , hence, we have that     Evaluating Line Integrals  Let be continuous on a region containing a smooth curve given by . Then      Evaluate the line integral , where is the quarter circle .   The net area bounded by the surface z equals x times y, over the domain defined by the curve C.     Net area bounded by and the -plane, restricted to     For we have and , so and , so . Substituting , , and into the line integral gives .     To parametrize a line segment starting at the point and ending at the point , you can use the parametrization .     Evaluate the line integral , where is the line segment from to .   The net area bounded by the surface z equals x squared minus y squared, over the domain defined by the curve C.     Net area bounded by and the -plane, restricted to     The line segment from to can be parametrized as , so and . Then , so . Since , the line integral becomes .     In we see that part of the area is below the -plane. This area is still being added, but as a negative number.  Hence, if , it doesn't mean that all of the area is above the -plane when restricted to , it just means that most of the area is above the -plane.   When computing line integrals, it doesn't matter how you parametrize the curve .   Independence of Parametrization  Let be continuous on a region containing a smooth curve . Then the value of is the same, no matter what parametrization you use for .     Verify that , where is the line segment from to , has the same value as in if you parametrize as .    For we have and ; at this gives and at it gives , so traces the same line segment as in . Differentiating, , so , since on . Hence . Since , the line integral becomes . Evaluating the antiderivative: , which matches the value found in , exactly as guaranteed by the Independence of Parametrization.    "
},
{
  "id": "sec-ch04-02-ScalarLineIntegrals-2",
  "level": "2",
  "url": "sec-ch04-02-ScalarLineIntegrals.html#sec-ch04-02-ScalarLineIntegrals-2",
  "type": "Note",
  "number": "4.2.1",
  "title": "",
  "body": " As we saw in Calculus I, given an integrable function calculates the net area bounded by and the -axis on .  In this section, we will find a way to find the net area bounded by a surface and the -plane, restricted to a curve in its domain.  "
},
{
  "id": "example-ch04-02-ex-15-1",
  "level": "2",
  "url": "sec-ch04-02-ScalarLineIntegrals.html#example-ch04-02-ex-15-1",
  "type": "Example",
  "number": "4.2.2",
  "title": "",
  "body": "  Below you can see the net area (in light green) bounded by the surface (in purple), restricted to the curve (in blue).   A curve C in xyz-space with a scalar function f(x,y,z) evaluated along it, illustrating the scalar line integral.      "
},
{
  "id": "sec-ch04-02-ScalarLineIntegrals-4",
  "level": "2",
  "url": "sec-ch04-02-ScalarLineIntegrals.html#sec-ch04-02-ScalarLineIntegrals-4",
  "type": "Note",
  "number": "4.2.3",
  "title": "",
  "body": " You can interpret this as finding the net area of a wall with height given by .  "
},
{
  "id": "sec-ch04-02-ScalarLineIntegrals-5",
  "level": "2",
  "url": "sec-ch04-02-ScalarLineIntegrals.html#sec-ch04-02-ScalarLineIntegrals-5",
  "type": "Remark",
  "number": "4.2.4",
  "title": "Arc Length as a Function.",
  "body": " Arc Length as a Function  Suppose you have an integrable curve on (that is traversed only once). For any , we can calculate the arc length of the curve on using the formula   Moreover, by the Fundamental Theorem of Calculus, we have that .  Equivalently, .  "
},
{
  "id": "fig-ch04-02-rectangles",
  "level": "2",
  "url": "sec-ch04-02-ScalarLineIntegrals.html#fig-ch04-02-rectangles",
  "type": "Figure",
  "number": "4.2.2",
  "title": "",
  "body": " The more rectangles we use, the better the approximation    The net area bounded by f on R, approximated using 8 rectangles.      The net area bounded by f on R, approximated using 16 rectangles.      The net area bounded by f on R, approximated using 32 rectangles.      "
},
{
  "id": "fig-ch04-02-partitioned-curve",
  "level": "2",
  "url": "sec-ch04-02-ScalarLineIntegrals.html#fig-ch04-02-partitioned-curve",
  "type": "Figure",
  "number": "4.2.3",
  "title": "",
  "body": " Openstax Calculus 3, Section 6.2   A curve segment partitioned into smaller pieces.   A curve segment partitioned into smaller pieces.    "
},
{
  "id": "sec-ch04-02-ScalarLineIntegrals-17",
  "level": "2",
  "url": "sec-ch04-02-ScalarLineIntegrals.html#sec-ch04-02-ScalarLineIntegrals-17",
  "type": "Definition",
  "number": "4.2.5",
  "title": "Scalar Line Integral.",
  "body": " Scalar Line Integral   Suppose you have a surface defined on a smooth curve given by . The line integral of over is provided that the limit exists. If the limit exists, we say that is integrable on .   "
},
{
  "id": "sec-ch04-02-ScalarLineIntegrals-18",
  "level": "2",
  "url": "sec-ch04-02-ScalarLineIntegrals.html#sec-ch04-02-ScalarLineIntegrals-18",
  "type": "Note",
  "number": "4.2.6",
  "title": "",
  "body": " As in previous examples, being smooth means that it is differentiable (has no sharp edges and doesn't cross\/intersect itself).  From our work in the first remark, we know that , hence, we have that   "
},
{
  "id": "sec-ch04-02-ScalarLineIntegrals-19",
  "level": "2",
  "url": "sec-ch04-02-ScalarLineIntegrals.html#sec-ch04-02-ScalarLineIntegrals-19",
  "type": "Remark",
  "number": "4.2.7",
  "title": "Evaluating Line Integrals.",
  "body": " Evaluating Line Integrals  Let be continuous on a region containing a smooth curve given by . Then   "
},
{
  "id": "example-ch04-02-ex-15-2",
  "level": "2",
  "url": "sec-ch04-02-ScalarLineIntegrals.html#example-ch04-02-ex-15-2",
  "type": "Example",
  "number": "4.2.8",
  "title": "",
  "body": "  Evaluate the line integral , where is the quarter circle .   The net area bounded by the surface z equals x times y, over the domain defined by the curve C.     Net area bounded by and the -plane, restricted to     For we have and , so and , so . Substituting , , and into the line integral gives .   "
},
{
  "id": "sec-ch04-02-ScalarLineIntegrals-21",
  "level": "2",
  "url": "sec-ch04-02-ScalarLineIntegrals.html#sec-ch04-02-ScalarLineIntegrals-21",
  "type": "Note",
  "number": "4.2.9",
  "title": "",
  "body": " To parametrize a line segment starting at the point and ending at the point , you can use the parametrization .  "
},
{
  "id": "example-ch04-02-ex-15-3",
  "level": "2",
  "url": "sec-ch04-02-ScalarLineIntegrals.html#example-ch04-02-ex-15-3",
  "type": "Example",
  "number": "4.2.10",
  "title": "",
  "body": "  Evaluate the line integral , where is the line segment from to .   The net area bounded by the surface z equals x squared minus y squared, over the domain defined by the curve C.     Net area bounded by and the -plane, restricted to     The line segment from to can be parametrized as , so and . Then , so . Since , the line integral becomes .   "
},
{
  "id": "sec-ch04-02-ScalarLineIntegrals-23",
  "level": "2",
  "url": "sec-ch04-02-ScalarLineIntegrals.html#sec-ch04-02-ScalarLineIntegrals-23",
  "type": "Note",
  "number": "4.2.11",
  "title": "",
  "body": " In we see that part of the area is below the -plane. This area is still being added, but as a negative number.  Hence, if , it doesn't mean that all of the area is above the -plane when restricted to , it just means that most of the area is above the -plane.  "
},
{
  "id": "sec-ch04-02-ScalarLineIntegrals-25",
  "level": "2",
  "url": "sec-ch04-02-ScalarLineIntegrals.html#sec-ch04-02-ScalarLineIntegrals-25",
  "type": "Remark",
  "number": "4.2.12",
  "title": "Independence of Parametrization.",
  "body": " Independence of Parametrization  Let be continuous on a region containing a smooth curve . Then the value of is the same, no matter what parametrization you use for .  "
},
{
  "id": "example-ch04-02-ex-15-4",
  "level": "2",
  "url": "sec-ch04-02-ScalarLineIntegrals.html#example-ch04-02-ex-15-4",
  "type": "Example",
  "number": "4.2.13",
  "title": "",
  "body": "  Verify that , where is the line segment from to , has the same value as in if you parametrize as .    For we have and ; at this gives and at it gives , so traces the same line segment as in . Differentiating, , so , since on . Hence . Since , the line integral becomes . Evaluating the antiderivative: , which matches the value found in , exactly as guaranteed by the Independence of Parametrization.   "
},
{
  "id": "sec-ch04-03-DoubleIntegralsRectangularRegions",
  "level": "1",
  "url": "sec-ch04-03-DoubleIntegralsRectangularRegions.html",
  "type": "Section",
  "number": "4.3",
  "title": "Double Integrals in Cartesian Coordinates",
  "body": " Double Integrals in Cartesian Coordinates  Rectangular Regions   In the previous section, we learned how to integrate a surface over a curve in its domain (to compute net area). In this section, we will learn how to integrate over a rectangular region in its domain.    Geometrically, integrating a function over a rectangular region in its domain computes the net volume bounded by and the -plane, restricted to .  We can find the net volume bounded by and the -plane, restricted to a rectangle , by partitioning the net volume into rectangular prisms.    The net volume bounded by f on R, approximated using 4, then 16, then 100 rectangular prisms.      As the image above suggests, to approximate the net volume bounded by and the -plane on (restricted to ), we simply add up the net volumes of each individual rectangular prism.   Geometrically, we are partitioning the rectangle in the -plane into smaller rectangles as pictured below:   The rectangular region R in the xy-plane partitioned into smaller rectangles, and a sample point.     From the picture, we can see that the area of the -th rectangle is . Since the height is given by the function evaluated at ( ), the net volume of the -th rectangular prism is . It follows that an approximation for the net volume of the whole region is   If we take the number of rectangles to approach infinity (and hence 0 ), we get that the net volume is   We call this formula for the net volume a double integral.   Double Integral   A function defined on a rectangular region is said to be integrable on if exists. Moreover, if this limit exists, we call it the double integral of over , and write it as    gives the net volume bounded by and the -plane, on .     Suppose we want to find the net volume bounded by and the plane, on the region (we always assume , ).     Partition the net volume into vertical cross-sections parallel to the -axis.   From OpenStax, Calculus Volume 3, section 5.1   A slice of the net volume bounded by f on R partitioned into vertical cross-sections parallel to the y-axis.   A slice of the net volume bounded by on partitioned into vertical cross-sections parallel to the -axis.     Note that to get each cross section, we simply intersect the surface with a plane (treat as a constant), . Hence, we denote the net area of each cross section as (we get a different net area\/cross section for each ).    To find (the net area of each cross section), we simply integrate with respect to (treat as a constant) from to . That is, .    Finally, we want to add up , for . We do this by integrating with respect to . Hence, the net volume is given by       We summarize this result below.   Evaluating Double Integrals using Iterated Integrals   To integrate a function over the rectangular region , we use the formula   We call stacked integrals like these iterated integrals.     Remember to evaluate iterated integrals inside out, that is,      Evaluate where .   The surface f of x and y equals 6 minus 3 x squared minus 2 y, above the rectangular region R consisting of all points x, y with x between 0 and 1 and y between 0 and 2.          The region is the rectangle , , so we evaluate the double integral as an iterated integral in the order : . Evaluating the inner integral with treated as a constant: . Then integrating with respect to : .     In our method for evaluating double integrals using iterated integrals, we could have partitioned the net volume into cross sections parallel to the -axis (treating as a constant):   From OpenStax, Calculus Volume 3, section 5.1   A slice of the net volume bounded by f on R partitioned into vertical cross-sections parallel to the x-axis.   A slice of the net volume bounded by on partitioned into vertical cross-sections parallel to the -axis.      With this set up, the net area of the cross sections , is given by and the net volume is given by   When integrating over rectangular regions, either set up will give you the same result!   Fubini's Theorem (Rectangular Regions)   Let be continuous on the rectangular region . The double integral of over can be evaluated by either of two iterated integrals:       Evaluate where     This is the same integral as in ; by Fubini's theorem we may integrate in the opposite order and obtain the same value: . Evaluating the inner integral with treated as a constant: . Then integrating with respect to : , which matches the value found in , exactly as Fubini's theorem guarantees.     Changing the order of integration in an iterated integral can significantly reduce the difficulty of the problem.     Evaluate    The surface f of x and y equals x cubed times the sine of e to the power y, and the net volume bounded by f and the xy-plane.     The surface in blue and the net volume in orange    Integrating in the given order would require , which has no elementary antiderivative. Since the region is the rectangle , , Fubini's theorem lets us reverse the order of integration: . Now is constant with respect to , so the inner integral is . The inner integral vanishes for every because is odd and the interval is symmetric about the origin. Hence .    "
},
{
  "id": "sec-ch04-03-DoubleIntegralsRectangularRegions-3",
  "level": "2",
  "url": "sec-ch04-03-DoubleIntegralsRectangularRegions.html#sec-ch04-03-DoubleIntegralsRectangularRegions-3",
  "type": "Note",
  "number": "4.3.1",
  "title": "",
  "body": " In the previous section, we learned how to integrate a surface over a curve in its domain (to compute net area). In this section, we will learn how to integrate over a rectangular region in its domain.  "
},
{
  "id": "sec-ch04-03-DoubleIntegralsRectangularRegions-4",
  "level": "2",
  "url": "sec-ch04-03-DoubleIntegralsRectangularRegions.html#sec-ch04-03-DoubleIntegralsRectangularRegions-4",
  "type": "Remark",
  "number": "4.3.2",
  "title": "",
  "body": " Geometrically, integrating a function over a rectangular region in its domain computes the net volume bounded by and the -plane, restricted to .  We can find the net volume bounded by and the -plane, restricted to a rectangle , by partitioning the net volume into rectangular prisms.  "
},
{
  "id": "fig-ch04-03-prisms",
  "level": "2",
  "url": "sec-ch04-03-DoubleIntegralsRectangularRegions.html#fig-ch04-03-prisms",
  "type": "Figure",
  "number": "4.3.1",
  "title": "",
  "body": " The net volume bounded by f on R, approximated using 4, then 16, then 100 rectangular prisms.    "
},
{
  "id": "sec-ch04-03-DoubleIntegralsRectangularRegions-6",
  "level": "2",
  "url": "sec-ch04-03-DoubleIntegralsRectangularRegions.html#sec-ch04-03-DoubleIntegralsRectangularRegions-6",
  "type": "Note",
  "number": "4.3.3",
  "title": "",
  "body": " As the image above suggests, to approximate the net volume bounded by and the -plane on (restricted to ), we simply add up the net volumes of each individual rectangular prism.  "
},
{
  "id": "fig-ch04-03-partitioned-rectangle",
  "level": "2",
  "url": "sec-ch04-03-DoubleIntegralsRectangularRegions.html#fig-ch04-03-partitioned-rectangle",
  "type": "Figure",
  "number": "4.3.2",
  "title": "",
  "body": " The rectangular region R in the xy-plane partitioned into smaller rectangles, and a sample point.    "
},
{
  "id": "sec-ch04-03-DoubleIntegralsRectangularRegions-12",
  "level": "2",
  "url": "sec-ch04-03-DoubleIntegralsRectangularRegions.html#sec-ch04-03-DoubleIntegralsRectangularRegions-12",
  "type": "Definition",
  "number": "4.3.4",
  "title": "Double Integral.",
  "body": " Double Integral   A function defined on a rectangular region is said to be integrable on if exists. Moreover, if this limit exists, we call it the double integral of over , and write it as    gives the net volume bounded by and the -plane, on .   "
},
{
  "id": "sec-ch04-03-DoubleIntegralsRectangularRegions-13",
  "level": "2",
  "url": "sec-ch04-03-DoubleIntegralsRectangularRegions.html#sec-ch04-03-DoubleIntegralsRectangularRegions-13",
  "type": "Remark",
  "number": "4.3.5",
  "title": "",
  "body": " Suppose we want to find the net volume bounded by and the plane, on the region (we always assume , ).     Partition the net volume into vertical cross-sections parallel to the -axis.   From OpenStax, Calculus Volume 3, section 5.1   A slice of the net volume bounded by f on R partitioned into vertical cross-sections parallel to the y-axis.   A slice of the net volume bounded by on partitioned into vertical cross-sections parallel to the -axis.     Note that to get each cross section, we simply intersect the surface with a plane (treat as a constant), . Hence, we denote the net area of each cross section as (we get a different net area\/cross section for each ).    To find (the net area of each cross section), we simply integrate with respect to (treat as a constant) from to . That is, .    Finally, we want to add up , for . We do this by integrating with respect to . Hence, the net volume is given by      "
},
{
  "id": "sec-ch04-03-DoubleIntegralsRectangularRegions-15",
  "level": "2",
  "url": "sec-ch04-03-DoubleIntegralsRectangularRegions.html#sec-ch04-03-DoubleIntegralsRectangularRegions-15",
  "type": "Definition",
  "number": "4.3.6",
  "title": "Evaluating Double Integrals using Iterated Integrals.",
  "body": " Evaluating Double Integrals using Iterated Integrals   To integrate a function over the rectangular region , we use the formula   We call stacked integrals like these iterated integrals.   "
},
{
  "id": "sec-ch04-03-DoubleIntegralsRectangularRegions-16",
  "level": "2",
  "url": "sec-ch04-03-DoubleIntegralsRectangularRegions.html#sec-ch04-03-DoubleIntegralsRectangularRegions-16",
  "type": "Note",
  "number": "4.3.7",
  "title": "",
  "body": " Remember to evaluate iterated integrals inside out, that is,   "
},
{
  "id": "example-ch04-03-ex-16-1",
  "level": "2",
  "url": "sec-ch04-03-DoubleIntegralsRectangularRegions.html#example-ch04-03-ex-16-1",
  "type": "Example",
  "number": "4.3.8",
  "title": "",
  "body": "  Evaluate where .   The surface f of x and y equals 6 minus 3 x squared minus 2 y, above the rectangular region R consisting of all points x, y with x between 0 and 1 and y between 0 and 2.          The region is the rectangle , , so we evaluate the double integral as an iterated integral in the order : . Evaluating the inner integral with treated as a constant: . Then integrating with respect to : .   "
},
{
  "id": "sec-ch04-03-DoubleIntegralsRectangularRegions-18",
  "level": "2",
  "url": "sec-ch04-03-DoubleIntegralsRectangularRegions.html#sec-ch04-03-DoubleIntegralsRectangularRegions-18",
  "type": "Note",
  "number": "4.3.9",
  "title": "",
  "body": " In our method for evaluating double integrals using iterated integrals, we could have partitioned the net volume into cross sections parallel to the -axis (treating as a constant):   From OpenStax, Calculus Volume 3, section 5.1   A slice of the net volume bounded by f on R partitioned into vertical cross-sections parallel to the x-axis.   A slice of the net volume bounded by on partitioned into vertical cross-sections parallel to the -axis.     "
},
{
  "id": "sec-ch04-03-DoubleIntegralsRectangularRegions-21",
  "level": "2",
  "url": "sec-ch04-03-DoubleIntegralsRectangularRegions.html#sec-ch04-03-DoubleIntegralsRectangularRegions-21",
  "type": "Theorem",
  "number": "4.3.10",
  "title": "Fubini’s Theorem (Rectangular Regions).",
  "body": " Fubini's Theorem (Rectangular Regions)   Let be continuous on the rectangular region . The double integral of over can be evaluated by either of two iterated integrals:    "
},
{
  "id": "example-ch04-03-ex-16-2",
  "level": "2",
  "url": "sec-ch04-03-DoubleIntegralsRectangularRegions.html#example-ch04-03-ex-16-2",
  "type": "Example",
  "number": "4.3.11",
  "title": "",
  "body": "  Evaluate where     This is the same integral as in ; by Fubini's theorem we may integrate in the opposite order and obtain the same value: . Evaluating the inner integral with treated as a constant: . Then integrating with respect to : , which matches the value found in , exactly as Fubini's theorem guarantees.   "
},
{
  "id": "sec-ch04-03-DoubleIntegralsRectangularRegions-23",
  "level": "2",
  "url": "sec-ch04-03-DoubleIntegralsRectangularRegions.html#sec-ch04-03-DoubleIntegralsRectangularRegions-23",
  "type": "Remark",
  "number": "4.3.12",
  "title": "",
  "body": " Changing the order of integration in an iterated integral can significantly reduce the difficulty of the problem.  "
},
{
  "id": "example-ch04-03-ex-16-3",
  "level": "2",
  "url": "sec-ch04-03-DoubleIntegralsRectangularRegions.html#example-ch04-03-ex-16-3",
  "type": "Example",
  "number": "4.3.13",
  "title": "",
  "body": "  Evaluate    The surface f of x and y equals x cubed times the sine of e to the power y, and the net volume bounded by f and the xy-plane.     The surface in blue and the net volume in orange    Integrating in the given order would require , which has no elementary antiderivative. Since the region is the rectangle , , Fubini's theorem lets us reverse the order of integration: . Now is constant with respect to , so the inner integral is . The inner integral vanishes for every because is odd and the interval is symmetric about the origin. Hence .   "
},
{
  "id": "sec-ch04-04-DoubleIntegralsGeneralRegionsPart1",
  "level": "1",
  "url": "sec-ch04-04-DoubleIntegralsGeneralRegionsPart1.html",
  "type": "Section",
  "number": "4.4",
  "title": "Double Integrals in Cartesian Coordinates",
  "body": " Double Integrals in Cartesian Coordinates  General Regions   In this section we will do the same thing we did in the previous: We will find the net volume bounded by a surface and the -plane, restricted to a region in its domain.   However, we will now consider regions in the plane whose upper and lower bounds are given by curves (rather than straight lines as with rectangles), as shown below:   The area between the function f and the function g      The process to find the net volume is exactly the same as before. We still partition the region into rectangles, although at first they won't fit inside very nicely.    As we increase the number of rectangles, we will get a better fit. When we take the number of rectangles to approach infinity, we theoretically cover the whole region .   Portion of region R covered with rectangles that lie completely inside R.     Since the height of each rectangular prism is still given by (where is a point in the -th rectangle) and the area of each rectangle is still , we get the same formula for the net volume:    Evaluating Double Integrals over General Regions  As before, we will partition the net volume into cross sections, with net area , parallel to the -axis (keep as a constant); the difference is the upper and lower bounds of the region are now functions and (instead of constants)    Left: a cross section for a given value of x; Right: the net area of the cross section      Left: a cross section with x equals c 1; Right: the net area of the cross section       Suppose we want to integrate the function on the region bounded above by and below by , for , as shown below. Find the net area of the cross section corresponding to .   The area of the cross section       At the region has ranging from the lower bound to the upper bound . Substituting gives ranging from to . The net area of the cross section is the integral of with respect to over this interval: .    More generally, to find the net area of an arbitrary cross section, we integrate with respect to with the bounds of integration given by the upper and lower bounds of . That is,   Consequently, the net volume of the whole region is given by    Evaluating Double Integrals as Iterated Integrals  To integrate a continuous function over a region bounded by continuous functions and from to , use the formula     To find the bounds and when integrating in the order :     Draw a sketch of the region in the -plane.    Draw vertical lines from bottom to top.    Whichever boundary the vertical lines (from step 2) intersect first (as they enter the region) is the lower bound of the region.    Whichever boundary the vertical lines (from step 2) intersect second (as they leave the region) is the upper bound of the region.        Evaluate where is the region bounded by the parabolas and .   The surface of the function f and the net volume     The surface in blue and the net volume in orange    First we find where the two curves intersect to determine the -bounds. Setting gives , hence , so or . The curves meet at and , giving . For a fixed a vertical line enters the region at (the lower boundary, since on ) and exits at (the upper boundary). Hence . Evaluating the inner integral with treated as a constant: . Then integrating with respect to : .      Find the (net) volume of the prism whose base is the triangle in the -plane bounded by -axis and the lines and and whose top lies on the plane .   The surface of the function f and the net volume     The surface in blue and the net volume in orange    The three boundary lines , , and meet at , , and . For a fixed a vertical line enters the triangle at and exits at , giving the bounds and . Hence . Evaluating the inner integral: . Then integrating with respect to : .     Sometimes the region of integration is more easily described as being bounded to the left and right instead of below and above. In this case, the boundaries are functions of , as shown below:   The area between the function f and the function g      In this case, we use cross sections parallel to the -axis (treat as a constant). Now, we have that the net area of the cross sections is given by and the net volume is given by    Evaluating Double Integrals as Iterated Integrals  To integrate a continuous function over a region bounded by continuous functions and from to , use the formula     To find the bounds and when integrating in the order :     Draw a sketch of the region in the -plane.    Draw horizontal lines from left to right.    Whichever boundary the horizontal lines intersect first (as they enter the region) is the lower (leftmost) bound of the region.    Whichever boundary the horizontal lines intersects second (as they leave the region) is the upper (rightmost) bound of the region.        Find the (net) volume of the prism whose base is the triangle in the -plane bounded by -axis and the lines and and whose top lies on the plane (in the order ).    The triangle has vertices , , and . For a fixed a horizontal line enters the triangle at (from the line solved for ) and exits at , giving the bounds and . Hence . Evaluating the inner integral: . Then integrating with respect to : , which matches the result from , as expected.     Partitioning Regions of Integration  Suppose we are evaluating an iterated integral using the order (cross sections parallel to the -axis). If the lower and upper bounds of change throughout the region, you must partition every time such a change occurs and integrate over each piece separately,     Using the order , set up (but do not evaluate) an iterated integral(s) that give the (net) volume of the wedgelike solid that lies beneath the surface and above the region bounded by the curve , the line , and the -axis.   The region R and its partition into R 1 and R 2     The region and its partition into and     We first find the intersection points of the three boundary curves. Setting and letting gives , i.e. , which factors as . Since we get , so and . The curve meets the -axis ( ) at and the line meets the -axis ( ) at .  For a fixed , a vertical line crosses the region differently depending on : for the lower boundary is the line ( -axis) and the upper boundary is the parabola , while for the lower boundary is the line and the upper boundary remains . Hence .     Similarly, when integrating in the order , if the leftmost or rightmost bounds change, you need to partition the region .     Using the order , set up (but do not evaluate) an iterated integral(s) that gives the net volume bounded by and the -plane restricted to the region bounded by , and . You can assume the two curves intersect only at the point (1, 2)    The exponential passes through and the line has -intercept and meets the exponential at , as mentioned above. The -axis ( ) meets the exponential at and the line at . For a fixed , a horizontal line crosses the region differently depending on : for the left boundary is the exponential and the right boundary is the line , while for the left boundary is the -axis and the right boundary remains . Hence .     Sometimes, changing the order of integration simplifies the amount of work when integrating.     Set up (but do not evaluate) an iterated integral(s) that gives the net volume from Use the order . (Beneath the surface and above the region bounded by the curve , the line , and the -axis.)   The domain of integration       We first find the intersection points of the three boundary curves. Setting and letting gives , i.e. , which factors as . Since we do not consider the case , we only get , so and . The curve meets the -axis ( ) at and the line meets the -axis ( ) at .  Solving the boundary curves for in terms of : from we get , and from we get . For a fixed a horizontal line enters the region at the curve and exits at the line , with no change in which boundary is which throughout the entire interval. Hence only a single integral is needed: .    "
},
{
  "id": "sec-ch04-04-DoubleIntegralsGeneralRegionsPart1-3",
  "level": "2",
  "url": "sec-ch04-04-DoubleIntegralsGeneralRegionsPart1.html#sec-ch04-04-DoubleIntegralsGeneralRegionsPart1-3",
  "type": "Note",
  "number": "4.4.1",
  "title": "",
  "body": " In this section we will do the same thing we did in the previous: We will find the net volume bounded by a surface and the -plane, restricted to a region in its domain.  "
},
{
  "id": "fig-ch04-04-region-between-curves",
  "level": "2",
  "url": "sec-ch04-04-DoubleIntegralsGeneralRegionsPart1.html#fig-ch04-04-region-between-curves",
  "type": "Figure",
  "number": "4.4.1",
  "title": "",
  "body": " The area between the function f and the function g    "
},
{
  "id": "sec-ch04-04-DoubleIntegralsGeneralRegionsPart1-6",
  "level": "2",
  "url": "sec-ch04-04-DoubleIntegralsGeneralRegionsPart1.html#sec-ch04-04-DoubleIntegralsGeneralRegionsPart1-6",
  "type": "Note",
  "number": "4.4.2",
  "title": "",
  "body": " The process to find the net volume is exactly the same as before. We still partition the region into rectangles, although at first they won't fit inside very nicely.  "
},
{
  "id": "fig-ch04-04-rectangles-inside-region",
  "level": "2",
  "url": "sec-ch04-04-DoubleIntegralsGeneralRegionsPart1.html#fig-ch04-04-rectangles-inside-region",
  "type": "Figure",
  "number": "4.4.2",
  "title": "",
  "body": " Portion of region R covered with rectangles that lie completely inside R.    "
},
{
  "id": "sec-ch04-04-DoubleIntegralsGeneralRegionsPart1-10",
  "level": "2",
  "url": "sec-ch04-04-DoubleIntegralsGeneralRegionsPart1.html#sec-ch04-04-DoubleIntegralsGeneralRegionsPart1-10",
  "type": "Note",
  "number": "4.4.3",
  "title": "Evaluating Double Integrals over General Regions.",
  "body": " Evaluating Double Integrals over General Regions  As before, we will partition the net volume into cross sections, with net area , parallel to the -axis (keep as a constant); the difference is the upper and lower bounds of the region are now functions and (instead of constants)  "
},
{
  "id": "fig-ch04-04-cross-section-1",
  "level": "2",
  "url": "sec-ch04-04-DoubleIntegralsGeneralRegionsPart1.html#fig-ch04-04-cross-section-1",
  "type": "Figure",
  "number": "4.4.3",
  "title": "",
  "body": " Left: a cross section for a given value of x; Right: the net area of the cross section    "
},
{
  "id": "fig-ch04-04-cross-section-2",
  "level": "2",
  "url": "sec-ch04-04-DoubleIntegralsGeneralRegionsPart1.html#fig-ch04-04-cross-section-2",
  "type": "Figure",
  "number": "4.4.4",
  "title": "",
  "body": " Left: a cross section with x equals c 1; Right: the net area of the cross section    "
},
{
  "id": "example-ch04-04-ex-17-1",
  "level": "2",
  "url": "sec-ch04-04-DoubleIntegralsGeneralRegionsPart1.html#example-ch04-04-ex-17-1",
  "type": "Example",
  "number": "4.4.4",
  "title": "",
  "body": "  Suppose we want to integrate the function on the region bounded above by and below by , for , as shown below. Find the net area of the cross section corresponding to .   The area of the cross section       At the region has ranging from the lower bound to the upper bound . Substituting gives ranging from to . The net area of the cross section is the integral of with respect to over this interval: .   "
},
{
  "id": "sec-ch04-04-DoubleIntegralsGeneralRegionsPart1-16",
  "level": "2",
  "url": "sec-ch04-04-DoubleIntegralsGeneralRegionsPart1.html#sec-ch04-04-DoubleIntegralsGeneralRegionsPart1-16",
  "type": "Remark",
  "number": "4.4.5",
  "title": "Evaluating Double Integrals as Iterated Integrals.",
  "body": " Evaluating Double Integrals as Iterated Integrals  To integrate a continuous function over a region bounded by continuous functions and from to , use the formula   "
},
{
  "id": "sec-ch04-04-DoubleIntegralsGeneralRegionsPart1-17",
  "level": "2",
  "url": "sec-ch04-04-DoubleIntegralsGeneralRegionsPart1.html#sec-ch04-04-DoubleIntegralsGeneralRegionsPart1-17",
  "type": "Note",
  "number": "4.4.6",
  "title": "",
  "body": " To find the bounds and when integrating in the order :     Draw a sketch of the region in the -plane.    Draw vertical lines from bottom to top.    Whichever boundary the vertical lines (from step 2) intersect first (as they enter the region) is the lower bound of the region.    Whichever boundary the vertical lines (from step 2) intersect second (as they leave the region) is the upper bound of the region.     "
},
{
  "id": "example-ch04-04-ex-17-2",
  "level": "2",
  "url": "sec-ch04-04-DoubleIntegralsGeneralRegionsPart1.html#example-ch04-04-ex-17-2",
  "type": "Example",
  "number": "4.4.7",
  "title": "",
  "body": "  Evaluate where is the region bounded by the parabolas and .   The surface of the function f and the net volume     The surface in blue and the net volume in orange    First we find where the two curves intersect to determine the -bounds. Setting gives , hence , so or . The curves meet at and , giving . For a fixed a vertical line enters the region at (the lower boundary, since on ) and exits at (the upper boundary). Hence . Evaluating the inner integral with treated as a constant: . Then integrating with respect to : .   "
},
{
  "id": "example-ch04-04-ex-17-3",
  "level": "2",
  "url": "sec-ch04-04-DoubleIntegralsGeneralRegionsPart1.html#example-ch04-04-ex-17-3",
  "type": "Example",
  "number": "4.4.8",
  "title": "",
  "body": "  Find the (net) volume of the prism whose base is the triangle in the -plane bounded by -axis and the lines and and whose top lies on the plane .   The surface of the function f and the net volume     The surface in blue and the net volume in orange    The three boundary lines , , and meet at , , and . For a fixed a vertical line enters the triangle at and exits at , giving the bounds and . Hence . Evaluating the inner integral: . Then integrating with respect to : .   "
},
{
  "id": "sec-ch04-04-DoubleIntegralsGeneralRegionsPart1-20",
  "level": "2",
  "url": "sec-ch04-04-DoubleIntegralsGeneralRegionsPart1.html#sec-ch04-04-DoubleIntegralsGeneralRegionsPart1-20",
  "type": "Note",
  "number": "4.4.9",
  "title": "",
  "body": " Sometimes the region of integration is more easily described as being bounded to the left and right instead of below and above. In this case, the boundaries are functions of , as shown below:   The area between the function f and the function g     "
},
{
  "id": "sec-ch04-04-DoubleIntegralsGeneralRegionsPart1-22",
  "level": "2",
  "url": "sec-ch04-04-DoubleIntegralsGeneralRegionsPart1.html#sec-ch04-04-DoubleIntegralsGeneralRegionsPart1-22",
  "type": "Remark",
  "number": "4.4.10",
  "title": "Evaluating Double Integrals as Iterated Integrals.",
  "body": " Evaluating Double Integrals as Iterated Integrals  To integrate a continuous function over a region bounded by continuous functions and from to , use the formula   "
},
{
  "id": "sec-ch04-04-DoubleIntegralsGeneralRegionsPart1-23",
  "level": "2",
  "url": "sec-ch04-04-DoubleIntegralsGeneralRegionsPart1.html#sec-ch04-04-DoubleIntegralsGeneralRegionsPart1-23",
  "type": "Note",
  "number": "4.4.11",
  "title": "",
  "body": " To find the bounds and when integrating in the order :     Draw a sketch of the region in the -plane.    Draw horizontal lines from left to right.    Whichever boundary the horizontal lines intersect first (as they enter the region) is the lower (leftmost) bound of the region.    Whichever boundary the horizontal lines intersects second (as they leave the region) is the upper (rightmost) bound of the region.     "
},
{
  "id": "example-ch04-04-ex-17-4",
  "level": "2",
  "url": "sec-ch04-04-DoubleIntegralsGeneralRegionsPart1.html#example-ch04-04-ex-17-4",
  "type": "Example",
  "number": "4.4.12",
  "title": "",
  "body": "  Find the (net) volume of the prism whose base is the triangle in the -plane bounded by -axis and the lines and and whose top lies on the plane (in the order ).    The triangle has vertices , , and . For a fixed a horizontal line enters the triangle at (from the line solved for ) and exits at , giving the bounds and . Hence . Evaluating the inner integral: . Then integrating with respect to : , which matches the result from , as expected.   "
},
{
  "id": "sec-ch04-04-DoubleIntegralsGeneralRegionsPart1-25",
  "level": "2",
  "url": "sec-ch04-04-DoubleIntegralsGeneralRegionsPart1.html#sec-ch04-04-DoubleIntegralsGeneralRegionsPart1-25",
  "type": "Remark",
  "number": "4.4.13",
  "title": "Partitioning Regions of Integration.",
  "body": " Partitioning Regions of Integration  Suppose we are evaluating an iterated integral using the order (cross sections parallel to the -axis). If the lower and upper bounds of change throughout the region, you must partition every time such a change occurs and integrate over each piece separately,  "
},
{
  "id": "example-ch04-04-ex-17-5",
  "level": "2",
  "url": "sec-ch04-04-DoubleIntegralsGeneralRegionsPart1.html#example-ch04-04-ex-17-5",
  "type": "Example",
  "number": "4.4.14",
  "title": "",
  "body": "  Using the order , set up (but do not evaluate) an iterated integral(s) that give the (net) volume of the wedgelike solid that lies beneath the surface and above the region bounded by the curve , the line , and the -axis.   The region R and its partition into R 1 and R 2     The region and its partition into and     We first find the intersection points of the three boundary curves. Setting and letting gives , i.e. , which factors as . Since we get , so and . The curve meets the -axis ( ) at and the line meets the -axis ( ) at .  For a fixed , a vertical line crosses the region differently depending on : for the lower boundary is the line ( -axis) and the upper boundary is the parabola , while for the lower boundary is the line and the upper boundary remains . Hence .   "
},
{
  "id": "sec-ch04-04-DoubleIntegralsGeneralRegionsPart1-27",
  "level": "2",
  "url": "sec-ch04-04-DoubleIntegralsGeneralRegionsPart1.html#sec-ch04-04-DoubleIntegralsGeneralRegionsPart1-27",
  "type": "Note",
  "number": "4.4.15",
  "title": "",
  "body": " Similarly, when integrating in the order , if the leftmost or rightmost bounds change, you need to partition the region .  "
},
{
  "id": "example-ch04-04-ex-17-6",
  "level": "2",
  "url": "sec-ch04-04-DoubleIntegralsGeneralRegionsPart1.html#example-ch04-04-ex-17-6",
  "type": "Example",
  "number": "4.4.16",
  "title": "",
  "body": "  Using the order , set up (but do not evaluate) an iterated integral(s) that gives the net volume bounded by and the -plane restricted to the region bounded by , and . You can assume the two curves intersect only at the point (1, 2)    The exponential passes through and the line has -intercept and meets the exponential at , as mentioned above. The -axis ( ) meets the exponential at and the line at . For a fixed , a horizontal line crosses the region differently depending on : for the left boundary is the exponential and the right boundary is the line , while for the left boundary is the -axis and the right boundary remains . Hence .   "
},
{
  "id": "sec-ch04-04-DoubleIntegralsGeneralRegionsPart1-29",
  "level": "2",
  "url": "sec-ch04-04-DoubleIntegralsGeneralRegionsPart1.html#sec-ch04-04-DoubleIntegralsGeneralRegionsPart1-29",
  "type": "Note",
  "number": "4.4.17",
  "title": "",
  "body": " Sometimes, changing the order of integration simplifies the amount of work when integrating.  "
},
{
  "id": "example-ch04-04-ex-17-7",
  "level": "2",
  "url": "sec-ch04-04-DoubleIntegralsGeneralRegionsPart1.html#example-ch04-04-ex-17-7",
  "type": "Example",
  "number": "4.4.18",
  "title": "",
  "body": "  Set up (but do not evaluate) an iterated integral(s) that gives the net volume from Use the order . (Beneath the surface and above the region bounded by the curve , the line , and the -axis.)   The domain of integration       We first find the intersection points of the three boundary curves. Setting and letting gives , i.e. , which factors as . Since we do not consider the case , we only get , so and . The curve meets the -axis ( ) at and the line meets the -axis ( ) at .  Solving the boundary curves for in terms of : from we get , and from we get . For a fixed a horizontal line enters the region at the curve and exits at the line , with no change in which boundary is which throughout the entire interval. Hence only a single integral is needed: .   "
},
{
  "id": "sec-ch04-05-ChangingOrderOfIntegration",
  "level": "1",
  "url": "sec-ch04-05-ChangingOrderOfIntegration.html",
  "type": "Section",
  "number": "4.5",
  "title": "Changing Order of Integration",
  "body": " Changing Order of Integration   As with double integrals over rectangular regions, under some continuity assumptions, we may change the order of integration.    Fubini's Theorem (General Regions)   Let be continuous on a region .     If is defined by , with and continuous on , then     If is defined by , with and continuous on , then         Changing the order of integration over regions that are not rectangular requires more work. An easy way to do it is by drawing a sketch of the region of integration.  This means that we should be able to draw the region of integration just by looking at the bounds of integration from the iterated integrals.     Given the integral :  (a) Draw a sketch of the region of integration.  (b) Use your sketch to change the order of integration.  (c) Evaluate the double integral.    The bounds and describe the region between the upward-opening parabola and the downward-opening parabola . They intersect when , confirming the outer bounds. The region lies between the two parabolas for .   The domain of integration, the area between the parabolas        To integrate in the order , we need to express as a function of . From the two parabolas: gives , and gives . The region has ranging from the bottom of the lower parabola to the top of the upper one. The lower parabola has its vertex at and the upper at ; they meet at . For the horizontal cross-section is bounded on the left and right by and . For the cross-section is bounded by and . Hence, the integral with reversed order is     Evaluating using the original order is more straightforward here.       Given the integral :  (a) Draw a sketch of the region of integration.  (b) Use your sketch to change the order of integration.  (c) Evaluate the double integral.    The bounds and describe the region above the line and below the downward-opening parabola . They intersect when , giving and , confirming the outer bounds. For the line lies below the parabola.   The domain of integration, the area between the parabola and the line        To integrate in the order , we express as a function of . From we get (taking the negative square root since ), so the parabola gives the left boundary. From we get , which gives the right boundary. The variable ranges from the bottom intersection point to the top. At both curves meet, giving as the lower bound. The parabola reaches at , and the line also passes through , giving as the upper bound. Hence the reversed integral is     Evaluating using the original order is more straightforward here.      Volume Between Surfaces and Area  Just like in Calculus II we were able to find area bounded between functions, we can similarly find the volume bounded between surfaces.    Volume Between Surfaces  Suppose that and are continuous on a region and that on . Then the volume bounded by and on is given by      Set up (but do not evaluate) an iterated integral that gives the volume of the solid in the first octant ( ) bounded by the surfaces , above the circle .   The surface z equals x times y plus 5, the plane 2 x plus 2 y, and the area above the unit circle in the first octant between the surface and the plane.     The volume bounded by the given surfaces    First we determine which surface is on top. The region of integration is the part of the unit disk in the first quadrant, i.e. and . This implies that   For a fixed , ranges from to . Hence the volume is      Finding Area Using Double Integrals  Suppose you have a region in the -plane, you can find the area of by using the double integral   That is, integrating the function over .     Explain geometrically why the area of is given by .    Recall that gives the net volume of the solid bounded by the surface and the -plane, over the region . Choosing means the surface is the horizontal plane , which sits exactly one unit above the -plane at every point of . The solid bounded between and over is therefore a slab of uniform height 1. Its volume equals base area times height, that is . Hence .    "
},
{
  "id": "sec-ch04-05-ChangingOrderOfIntegration-2",
  "level": "2",
  "url": "sec-ch04-05-ChangingOrderOfIntegration.html#sec-ch04-05-ChangingOrderOfIntegration-2",
  "type": "Note",
  "number": "4.5.1",
  "title": "",
  "body": " As with double integrals over rectangular regions, under some continuity assumptions, we may change the order of integration.  "
},
{
  "id": "sec-ch04-05-ChangingOrderOfIntegration-3",
  "level": "2",
  "url": "sec-ch04-05-ChangingOrderOfIntegration.html#sec-ch04-05-ChangingOrderOfIntegration-3",
  "type": "Theorem",
  "number": "4.5.2",
  "title": "Fubini’s Theorem (General Regions).",
  "body": " Fubini's Theorem (General Regions)   Let be continuous on a region .     If is defined by , with and continuous on , then     If is defined by , with and continuous on , then       "
},
{
  "id": "sec-ch04-05-ChangingOrderOfIntegration-4",
  "level": "2",
  "url": "sec-ch04-05-ChangingOrderOfIntegration.html#sec-ch04-05-ChangingOrderOfIntegration-4",
  "type": "Remark",
  "number": "4.5.3",
  "title": "",
  "body": " Changing the order of integration over regions that are not rectangular requires more work. An easy way to do it is by drawing a sketch of the region of integration.  This means that we should be able to draw the region of integration just by looking at the bounds of integration from the iterated integrals.  "
},
{
  "id": "example-ch04-05-ex-18-1",
  "level": "2",
  "url": "sec-ch04-05-ChangingOrderOfIntegration.html#example-ch04-05-ex-18-1",
  "type": "Example",
  "number": "4.5.4",
  "title": "",
  "body": "  Given the integral :  (a) Draw a sketch of the region of integration.  (b) Use your sketch to change the order of integration.  (c) Evaluate the double integral.    The bounds and describe the region between the upward-opening parabola and the downward-opening parabola . They intersect when , confirming the outer bounds. The region lies between the two parabolas for .   The domain of integration, the area between the parabolas        To integrate in the order , we need to express as a function of . From the two parabolas: gives , and gives . The region has ranging from the bottom of the lower parabola to the top of the upper one. The lower parabola has its vertex at and the upper at ; they meet at . For the horizontal cross-section is bounded on the left and right by and . For the cross-section is bounded by and . Hence, the integral with reversed order is     Evaluating using the original order is more straightforward here.    "
},
{
  "id": "example-ch04-05-ex-18-2",
  "level": "2",
  "url": "sec-ch04-05-ChangingOrderOfIntegration.html#example-ch04-05-ex-18-2",
  "type": "Example",
  "number": "4.5.5",
  "title": "",
  "body": "  Given the integral :  (a) Draw a sketch of the region of integration.  (b) Use your sketch to change the order of integration.  (c) Evaluate the double integral.    The bounds and describe the region above the line and below the downward-opening parabola . They intersect when , giving and , confirming the outer bounds. For the line lies below the parabola.   The domain of integration, the area between the parabola and the line        To integrate in the order , we express as a function of . From we get (taking the negative square root since ), so the parabola gives the left boundary. From we get , which gives the right boundary. The variable ranges from the bottom intersection point to the top. At both curves meet, giving as the lower bound. The parabola reaches at , and the line also passes through , giving as the upper bound. Hence the reversed integral is     Evaluating using the original order is more straightforward here.    "
},
{
  "id": "sec-ch04-05-ChangingOrderOfIntegration-7",
  "level": "2",
  "url": "sec-ch04-05-ChangingOrderOfIntegration.html#sec-ch04-05-ChangingOrderOfIntegration-7",
  "type": "Note",
  "number": "4.5.6",
  "title": "Volume Between Surfaces and Area.",
  "body": " Volume Between Surfaces and Area  Just like in Calculus II we were able to find area bounded between functions, we can similarly find the volume bounded between surfaces.  "
},
{
  "id": "sec-ch04-05-ChangingOrderOfIntegration-8",
  "level": "2",
  "url": "sec-ch04-05-ChangingOrderOfIntegration.html#sec-ch04-05-ChangingOrderOfIntegration-8",
  "type": "Remark",
  "number": "4.5.7",
  "title": "Volume Between Surfaces.",
  "body": " Volume Between Surfaces  Suppose that and are continuous on a region and that on . Then the volume bounded by and on is given by   "
},
{
  "id": "example-ch04-05-ex-18-3",
  "level": "2",
  "url": "sec-ch04-05-ChangingOrderOfIntegration.html#example-ch04-05-ex-18-3",
  "type": "Example",
  "number": "4.5.8",
  "title": "",
  "body": "  Set up (but do not evaluate) an iterated integral that gives the volume of the solid in the first octant ( ) bounded by the surfaces , above the circle .   The surface z equals x times y plus 5, the plane 2 x plus 2 y, and the area above the unit circle in the first octant between the surface and the plane.     The volume bounded by the given surfaces    First we determine which surface is on top. The region of integration is the part of the unit disk in the first quadrant, i.e. and . This implies that   For a fixed , ranges from to . Hence the volume is    "
},
{
  "id": "sec-ch04-05-ChangingOrderOfIntegration-10",
  "level": "2",
  "url": "sec-ch04-05-ChangingOrderOfIntegration.html#sec-ch04-05-ChangingOrderOfIntegration-10",
  "type": "Remark",
  "number": "4.5.9",
  "title": "Finding Area Using Double Integrals.",
  "body": " Finding Area Using Double Integrals  Suppose you have a region in the -plane, you can find the area of by using the double integral   That is, integrating the function over .  "
},
{
  "id": "example-ch04-05-ex-18-4",
  "level": "2",
  "url": "sec-ch04-05-ChangingOrderOfIntegration.html#example-ch04-05-ex-18-4",
  "type": "Example",
  "number": "4.5.10",
  "title": "",
  "body": "  Explain geometrically why the area of is given by .    Recall that gives the net volume of the solid bounded by the surface and the -plane, over the region . Choosing means the surface is the horizontal plane , which sits exactly one unit above the -plane at every point of . The solid bounded between and over is therefore a slab of uniform height 1. Its volume equals base area times height, that is . Hence .   "
},
{
  "id": "sec-ch04-06-PolarCoordinates",
  "level": "1",
  "url": "sec-ch04-06-PolarCoordinates.html",
  "type": "Section",
  "number": "4.6",
  "title": "Double Integrals in Polar Coordinates",
  "body": " Double Integrals in Polar Coordinates   We know that we can label any point in the -plane (uniquely) in the form ( ). This is what we call Cartesian coordinates. In general, there are infinitely different sets of coordinates to label points in the plane! We will focus specifically on the set of coordinates called polar coordinates.    Polar Coordinates   Every point in the -plane can be written using the polar coordinates , where:      is the radius of the circle centered at the origin that contains .     is an angle created from the positive -axis in a counterclockwise motion (for clockwise motion, the angle is negative), that gives the direction of the vector .          The point with Cartesian coordinates ( 4,-3) in Cartesian and Polar Coordinates     The point ( ) in Cartesian and Polar Coordinates  Write the following points in polar coordinates:  (a)  (b)    The circle, centred at the origin, that passing through the point , has radius 2. Also, since the point is on the positive part of the -axis the angle is 0. Hence     The circle, centred at the origin, that passing through the point , has radius 5, as much as the distance of that point to the origin. Also, from the slope of the line passing through the origin and that point we have that , and since we are in the forth quadrant . Hence      For the most part, we will only work with ; but in some cases it will be useful to use negative angles as well.    Formulas to Change from Cartesian to Polar (and vice-versa)  Given a point in the plane, you can write it in polar coordinates by using the formulas:            Given a point ( ) in the plane, you can write it in Cartesian coordinates using the formulas:               Set up (but do not evaluate) an iterated integral (using Cartesian coordinates) that gives the net volume bounded by the surface and the -plane, restricted to the disk of radius 2 centered at the origin.    The disk can be expressed as . This gives us the bounds and for y and x respectively. Hence      When the region of integration is (partly) circular, it might be easier to integrate using polar coordinates.   This region is not a circle, but can be easily be described in terms of and as (from openstax)   The region between the circle of radius a and radius b, and between angle alpha and angle beta.   The region between the circle of radius and radius , and between angle and angle .       To find the net volume bounded by a surface and the -plane, on a (partly) circular region , we still use rectangular prisms, but now the base is given by a polar rectangle.   Partition of a (partly circular) region into polar rectangles (from openstax)   Partition of a (partly circular) region into polar rectangles   Partition of a (partly circular) region into polar rectangles      Note that:     The base of each rectangular prism is a polar rectangle now, so the area of the -th base isn't just . But, after some computation, we get that .    The height of each rectangular prism is still given by the function, but we want to write everything in terms of and (instead of and ). Hence, we rewrite as      .  Hence, we can approximate the net volume as and the net volume is given by    Evaluating Double Integrals (Polar Coordinates)  Let be continuous on the region in the -plane expressed in polar coordinates as , where (we don't exceed one rotation). Then, we can evaluate the double integral of over as     Continuation of Example 19.2   Write the iterated integral from in polar coordinates but don't evaluate it.    The disk can now be expressed as and since we insist on positive value for r . Now since there are no restrictions for provided in this domain . This can also be verified from the fact that for choice of a point within our disk, that point can be rotated any amount of radiant from its current position and it will still be within our disk.  Moreover since and , then we have that . In terms this implies that our integral is       Find the net volume of the solid bounded by and the -plane.   The graph of the cone of the function f(x,y), above the xy-plane.     The (upside-down) cone     From and we see that  since .  Now the domain of integration is the set of point for which from the fact that the cone is above the xy-plane (Image or the fact that it is of the form and hence it faces downwards). That implies that or in similar spirit with the previous calculations . Since again we have no restrictions on the domain for , we use for the bounds.  Hence       Find the net volume of the solid bounded by the paraboloids and .   The graph of the bottom part of the paraboloid z equals 12 minus 2 x squared minus 2 y squared, meeting the upper part of the paraboloid z equals x squared plus y squared.     The volume bounded by the paraboloids    Let and . They intersect at and is above within that bounded domain . (Image or compare their value at )  From and we see that  . Also .  Now the domain of integration is the set of points or in Polar coordinates . Since again we have no restrictions on the domain for , we use for the bounds.  Hence      Integrating Over General Polar Regions  We can also use polar coordinates when a region is bounded by and (instead of just constant values for the radius ).   (Partly) circular region bounded by and (from openstax)   A partly circular region bounded by r equals h of theta and r equals g of theta, between the angles of theta from alpha to beta.   A partly circular region bounded by and , between the angles of from to .       Evaluating Double Integrals (Polar Coordinates)  Let be continuous on the region in the -plane expressed in polar coordinates as , where (we don't exceed one rotation). Then, we can evaluate the double integral of over as     To find the bounds and when integrating using polar coordinates:     Draw a sketch of the region in the -plane.    Starting from the origin draw a typical radius towards the region .    Whichever boundary the radius intersects first (as it enters the region) is the lower bound of the region.    Whichever boundary the radius intersects second (as it exits the region) is the upper bound of the region.        Find the area of the region in the first quadrant above and below .   The area in the first quadrant bounded by y equals one half and x squared plus y squared equals 1.       From and we see that we receive . Also implies or . The above to lines intersect at or . Since we are restricted to the first quadrant we only take into account . Lastly, from the fact that we restrict ourselves on the first quadrant, the left most boundary line of this region is the -axis or or or . As previously we only take into account .  To find the area we would normally evaluate or , in other words the function that we integrate is . That implies that and that the desired integral is .      In the next example, it will be useful to use negative angles. But be careful: If and are the lower and upper -bounds for a region of integration, then as numbers, it must be that .     Set up (but do not evaluate) an iterated integral that gives the area of the region outside the circle and inside the circle , the latter for , as pictured below.   The area of the region outside the circle r equals 2 and inside the circle r equals 4 cosine of theta.      in orange and in blue    Since we want outside the circle we immediately have the lower bound for being 2. Since we want inside the circle we have the upper bound for being .  Now in order to find the bounds for we need find the points of intersection. If and concurrently, that implies that . To determine if we integrate from to or from to and to , we either consult the image or we test on point in each range. For we have that for the second circle we are at the point and hence outside the circle . Similarly, for we have that for the second circle we are at the point and hence inside the circle .  Hence the desired integral is      Partitioning Regions of Integration  If at any point, as sweeps through the region of integration , the lower and upper bounds and change, you need to set up multiple iterated integrals.     Set up (but do not evaluate) an iterated integral(s) that gives the area of the region in the first and fourth quadrant bounded by the circle , the -axis and , as shown below:   The area of the region in the first and fourth quadrant bounded by the circle with radius 4, the y-axis and x equals 2.       The problem here arises from the fact that there not a single integral in the order of integration that can express the area of the the above shape. The issue stems from the fact that for some part of the area the farthest away from the origin, radiating outwards, that we can get is the circle and for other parts the line . We will need as many integrals then as the intersection points of the above, plus one. One integral before the first intersection point, one in between the first and the seconds, the second and the third, and so on until the integral in between the last intersection point. The first and the last integral in this list may be ignored depending on the region (they may be equal to 0, since the start\/end of the region of the integration is an intersection point as with the previous example).  The -axis provides the bound which transforms to . The line forces us into the forth and first quadrant so we will traverse from to . Also, at any place of this region we can contract radially to the origin, hence our lower bound for the variable is 0. Now for the upper bounds. The line is expressed in polar coordinates as the equation or . The intersection of and comes from the equation .    Between and the points of the circle are closer to the origin (lower bound) than the point of the line , we can test with a value, say which gives us the point . This implies that the upper bound of the integral is   Between and the points of the circle are farther from the origin (lower bound) than the point of the line , we can test with a value, say which gives us the point . This implies that the upper bound of the integral is   Between and the points of the circle are closer to the origin (lower bound) than the point of the line , we can test with a value, say which gives us the point . This implies that the upper bound of the integral is   Hence the volume can be express as the sum of the following integrals     "
},
{
  "id": "sec-ch04-06-PolarCoordinates-2",
  "level": "2",
  "url": "sec-ch04-06-PolarCoordinates.html#sec-ch04-06-PolarCoordinates-2",
  "type": "Note",
  "number": "4.6.1",
  "title": "",
  "body": " We know that we can label any point in the -plane (uniquely) in the form ( ). This is what we call Cartesian coordinates. In general, there are infinitely different sets of coordinates to label points in the plane! We will focus specifically on the set of coordinates called polar coordinates.  "
},
{
  "id": "sec-ch04-06-PolarCoordinates-3",
  "level": "2",
  "url": "sec-ch04-06-PolarCoordinates.html#sec-ch04-06-PolarCoordinates-3",
  "type": "Definition",
  "number": "4.6.2",
  "title": "Polar Coordinates.",
  "body": " Polar Coordinates   Every point in the -plane can be written using the polar coordinates , where:      is the radius of the circle centered at the origin that contains .     is an angle created from the positive -axis in a counterclockwise motion (for clockwise motion, the angle is negative), that gives the direction of the vector .      "
},
{
  "id": "example-ch04-06-ex-19-1",
  "level": "2",
  "url": "sec-ch04-06-PolarCoordinates.html#example-ch04-06-ex-19-1",
  "type": "Example",
  "number": "4.6.3",
  "title": "",
  "body": "   The point with Cartesian coordinates ( 4,-3) in Cartesian and Polar Coordinates     The point ( ) in Cartesian and Polar Coordinates  Write the following points in polar coordinates:  (a)  (b)    The circle, centred at the origin, that passing through the point , has radius 2. Also, since the point is on the positive part of the -axis the angle is 0. Hence     The circle, centred at the origin, that passing through the point , has radius 5, as much as the distance of that point to the origin. Also, from the slope of the line passing through the origin and that point we have that , and since we are in the forth quadrant . Hence    "
},
{
  "id": "sec-ch04-06-PolarCoordinates-5",
  "level": "2",
  "url": "sec-ch04-06-PolarCoordinates.html#sec-ch04-06-PolarCoordinates-5",
  "type": "Note",
  "number": "4.6.4",
  "title": "",
  "body": " For the most part, we will only work with ; but in some cases it will be useful to use negative angles as well.  "
},
{
  "id": "sec-ch04-06-PolarCoordinates-6",
  "level": "2",
  "url": "sec-ch04-06-PolarCoordinates.html#sec-ch04-06-PolarCoordinates-6",
  "type": "Remark",
  "number": "4.6.5",
  "title": "Formulas to Change from Cartesian to Polar (and vice-versa).",
  "body": " Formulas to Change from Cartesian to Polar (and vice-versa)  Given a point in the plane, you can write it in polar coordinates by using the formulas:            Given a point ( ) in the plane, you can write it in Cartesian coordinates using the formulas:            "
},
{
  "id": "example-ch04-06-ex-19-2",
  "level": "2",
  "url": "sec-ch04-06-PolarCoordinates.html#example-ch04-06-ex-19-2",
  "type": "Example",
  "number": "4.6.6",
  "title": "",
  "body": "  Set up (but do not evaluate) an iterated integral (using Cartesian coordinates) that gives the net volume bounded by the surface and the -plane, restricted to the disk of radius 2 centered at the origin.    The disk can be expressed as . This gives us the bounds and for y and x respectively. Hence    "
},
{
  "id": "sec-ch04-06-PolarCoordinates-8",
  "level": "2",
  "url": "sec-ch04-06-PolarCoordinates.html#sec-ch04-06-PolarCoordinates-8",
  "type": "Note",
  "number": "4.6.7",
  "title": "",
  "body": " When the region of integration is (partly) circular, it might be easier to integrate using polar coordinates.   This region is not a circle, but can be easily be described in terms of and as (from openstax)   The region between the circle of radius a and radius b, and between angle alpha and angle beta.   The region between the circle of radius and radius , and between angle and angle .     "
},
{
  "id": "sec-ch04-06-PolarCoordinates-9",
  "level": "2",
  "url": "sec-ch04-06-PolarCoordinates.html#sec-ch04-06-PolarCoordinates-9",
  "type": "Note",
  "number": "4.6.8",
  "title": "",
  "body": " To find the net volume bounded by a surface and the -plane, on a (partly) circular region , we still use rectangular prisms, but now the base is given by a polar rectangle.   Partition of a (partly circular) region into polar rectangles (from openstax)   Partition of a (partly circular) region into polar rectangles   Partition of a (partly circular) region into polar rectangles     "
},
{
  "id": "sec-ch04-06-PolarCoordinates-14",
  "level": "2",
  "url": "sec-ch04-06-PolarCoordinates.html#sec-ch04-06-PolarCoordinates-14",
  "type": "Remark",
  "number": "4.6.9",
  "title": "Evaluating Double Integrals (Polar Coordinates).",
  "body": " Evaluating Double Integrals (Polar Coordinates)  Let be continuous on the region in the -plane expressed in polar coordinates as , where (we don't exceed one rotation). Then, we can evaluate the double integral of over as   "
},
{
  "id": "example-ch04-06-ex-19-2-continuation",
  "level": "2",
  "url": "sec-ch04-06-PolarCoordinates.html#example-ch04-06-ex-19-2-continuation",
  "type": "Example",
  "number": "4.6.10",
  "title": "Continuation of Example 19.2.",
  "body": " Continuation of Example 19.2   Write the iterated integral from in polar coordinates but don't evaluate it.    The disk can now be expressed as and since we insist on positive value for r . Now since there are no restrictions for provided in this domain . This can also be verified from the fact that for choice of a point within our disk, that point can be rotated any amount of radiant from its current position and it will still be within our disk.  Moreover since and , then we have that . In terms this implies that our integral is    "
},
{
  "id": "example-ch04-06-ex-19-3",
  "level": "2",
  "url": "sec-ch04-06-PolarCoordinates.html#example-ch04-06-ex-19-3",
  "type": "Example",
  "number": "4.6.11",
  "title": "",
  "body": "  Find the net volume of the solid bounded by and the -plane.   The graph of the cone of the function f(x,y), above the xy-plane.     The (upside-down) cone     From and we see that  since .  Now the domain of integration is the set of point for which from the fact that the cone is above the xy-plane (Image or the fact that it is of the form and hence it faces downwards). That implies that or in similar spirit with the previous calculations . Since again we have no restrictions on the domain for , we use for the bounds.  Hence    "
},
{
  "id": "example-ch04-06-ex-19-4",
  "level": "2",
  "url": "sec-ch04-06-PolarCoordinates.html#example-ch04-06-ex-19-4",
  "type": "Example",
  "number": "4.6.12",
  "title": "",
  "body": "  Find the net volume of the solid bounded by the paraboloids and .   The graph of the bottom part of the paraboloid z equals 12 minus 2 x squared minus 2 y squared, meeting the upper part of the paraboloid z equals x squared plus y squared.     The volume bounded by the paraboloids    Let and . They intersect at and is above within that bounded domain . (Image or compare their value at )  From and we see that  . Also .  Now the domain of integration is the set of points or in Polar coordinates . Since again we have no restrictions on the domain for , we use for the bounds.  Hence    "
},
{
  "id": "sec-ch04-06-PolarCoordinates-18",
  "level": "2",
  "url": "sec-ch04-06-PolarCoordinates.html#sec-ch04-06-PolarCoordinates-18",
  "type": "Note",
  "number": "4.6.13",
  "title": "Integrating Over General Polar Regions.",
  "body": " Integrating Over General Polar Regions  We can also use polar coordinates when a region is bounded by and (instead of just constant values for the radius ).   (Partly) circular region bounded by and (from openstax)   A partly circular region bounded by r equals h of theta and r equals g of theta, between the angles of theta from alpha to beta.   A partly circular region bounded by and , between the angles of from to .     "
},
{
  "id": "sec-ch04-06-PolarCoordinates-19",
  "level": "2",
  "url": "sec-ch04-06-PolarCoordinates.html#sec-ch04-06-PolarCoordinates-19",
  "type": "Remark",
  "number": "4.6.14",
  "title": "Evaluating Double Integrals (Polar Coordinates).",
  "body": " Evaluating Double Integrals (Polar Coordinates)  Let be continuous on the region in the -plane expressed in polar coordinates as , where (we don't exceed one rotation). Then, we can evaluate the double integral of over as   "
},
{
  "id": "sec-ch04-06-PolarCoordinates-20",
  "level": "2",
  "url": "sec-ch04-06-PolarCoordinates.html#sec-ch04-06-PolarCoordinates-20",
  "type": "Remark",
  "number": "4.6.15",
  "title": "",
  "body": " To find the bounds and when integrating using polar coordinates:     Draw a sketch of the region in the -plane.    Starting from the origin draw a typical radius towards the region .    Whichever boundary the radius intersects first (as it enters the region) is the lower bound of the region.    Whichever boundary the radius intersects second (as it exits the region) is the upper bound of the region.     "
},
{
  "id": "example-ch04-06-ex-19-5",
  "level": "2",
  "url": "sec-ch04-06-PolarCoordinates.html#example-ch04-06-ex-19-5",
  "type": "Example",
  "number": "4.6.16",
  "title": "",
  "body": "  Find the area of the region in the first quadrant above and below .   The area in the first quadrant bounded by y equals one half and x squared plus y squared equals 1.       From and we see that we receive . Also implies or . The above to lines intersect at or . Since we are restricted to the first quadrant we only take into account . Lastly, from the fact that we restrict ourselves on the first quadrant, the left most boundary line of this region is the -axis or or or . As previously we only take into account .  To find the area we would normally evaluate or , in other words the function that we integrate is . That implies that and that the desired integral is .    "
},
{
  "id": "sec-ch04-06-PolarCoordinates-22",
  "level": "2",
  "url": "sec-ch04-06-PolarCoordinates.html#sec-ch04-06-PolarCoordinates-22",
  "type": "Remark",
  "number": "4.6.17",
  "title": "",
  "body": " In the next example, it will be useful to use negative angles. But be careful: If and are the lower and upper -bounds for a region of integration, then as numbers, it must be that .  "
},
{
  "id": "example-ch04-06-ex-19-6",
  "level": "2",
  "url": "sec-ch04-06-PolarCoordinates.html#example-ch04-06-ex-19-6",
  "type": "Example",
  "number": "4.6.18",
  "title": "",
  "body": "  Set up (but do not evaluate) an iterated integral that gives the area of the region outside the circle and inside the circle , the latter for , as pictured below.   The area of the region outside the circle r equals 2 and inside the circle r equals 4 cosine of theta.      in orange and in blue    Since we want outside the circle we immediately have the lower bound for being 2. Since we want inside the circle we have the upper bound for being .  Now in order to find the bounds for we need find the points of intersection. If and concurrently, that implies that . To determine if we integrate from to or from to and to , we either consult the image or we test on point in each range. For we have that for the second circle we are at the point and hence outside the circle . Similarly, for we have that for the second circle we are at the point and hence inside the circle .  Hence the desired integral is    "
},
{
  "id": "sec-ch04-06-PolarCoordinates-24",
  "level": "2",
  "url": "sec-ch04-06-PolarCoordinates.html#sec-ch04-06-PolarCoordinates-24",
  "type": "Note",
  "number": "4.6.19",
  "title": "Partitioning Regions of Integration.",
  "body": " Partitioning Regions of Integration  If at any point, as sweeps through the region of integration , the lower and upper bounds and change, you need to set up multiple iterated integrals.  "
},
{
  "id": "example-ch04-06-ex-19-7",
  "level": "2",
  "url": "sec-ch04-06-PolarCoordinates.html#example-ch04-06-ex-19-7",
  "type": "Example",
  "number": "4.6.20",
  "title": "",
  "body": "  Set up (but do not evaluate) an iterated integral(s) that gives the area of the region in the first and fourth quadrant bounded by the circle , the -axis and , as shown below:   The area of the region in the first and fourth quadrant bounded by the circle with radius 4, the y-axis and x equals 2.       The problem here arises from the fact that there not a single integral in the order of integration that can express the area of the the above shape. The issue stems from the fact that for some part of the area the farthest away from the origin, radiating outwards, that we can get is the circle and for other parts the line . We will need as many integrals then as the intersection points of the above, plus one. One integral before the first intersection point, one in between the first and the seconds, the second and the third, and so on until the integral in between the last intersection point. The first and the last integral in this list may be ignored depending on the region (they may be equal to 0, since the start\/end of the region of the integration is an intersection point as with the previous example).  The -axis provides the bound which transforms to . The line forces us into the forth and first quadrant so we will traverse from to . Also, at any place of this region we can contract radially to the origin, hence our lower bound for the variable is 0. Now for the upper bounds. The line is expressed in polar coordinates as the equation or . The intersection of and comes from the equation .    Between and the points of the circle are closer to the origin (lower bound) than the point of the line , we can test with a value, say which gives us the point . This implies that the upper bound of the integral is   Between and the points of the circle are farther from the origin (lower bound) than the point of the line , we can test with a value, say which gives us the point . This implies that the upper bound of the integral is   Between and the points of the circle are closer to the origin (lower bound) than the point of the line , we can test with a value, say which gives us the point . This implies that the upper bound of the integral is   Hence the volume can be express as the sum of the following integrals    "
},
{
  "id": "sec-ch04-07-ChangeOfVariables",
  "level": "1",
  "url": "sec-ch04-07-ChangeOfVariables.html",
  "type": "Section",
  "number": "4.7",
  "title": "Change of Variables for Double Integrals",
  "body": " Change of Variables for Double Integrals  Lets revisit Example 2 from the previous topic:  Our goal was to write, in polar coordinates, an iterated integral that gives the net volume bounded and the -plane, restricted to the circle of radius 1 .   A unit circle centred at the origin     The region in the -plane  When we changed to polar coordinates, we moved from the region in the -plane to integrating over the region in the -plane.   The region of the unit circle represented in the r-theta axis instead of the xy-axis. It is now a rectangle not a circle.     The region in the -plane  Hence, by using the substitutions and , we moved from computing a double integral over to computing a double integral over . That is,   The extra  you see showing up in the integral in polar coordinates is accounting for how the area around each point in is changing as we move from the -plane to the region in the -plane, so that the integrals are equal.   The idea of having an extra factor that accounts for changes in length\/area\/volume when changing regions of integration is something you have done before.  Consider the integral   The area we are calculating in this integral is pictured below:   The area represented by the integral from 1 to e, of the function ln(x) divided by x, integrated with respect to x, on the traditional xy-axis.     To evaluate this integral, we would apply the -substitution , to get the new integral     The area we are calculating with this integral is pictured below:   The area represented by the integral from 1 to e, of the function ln(x) divided by x, integrated with respect to x, after the u-substitution, on the new uy-axis system.     In the equation , the is playing the same role that is playing in . Specifically, is telling us that the interval in terms of is squeezed compared to , to accommodate the factor (as we see in the pictures).    Notice that if we removed the in , the integral in terms of would be which would give us a different answer.   The same happens with . The extra tells us that the area around a point in the -plane is times the area around a point in the -plane. If we removed the from the , the integrals would not be equal.   When doing a change of variables when working with double integrals, we have many options (we can use more than polar coordinates)!   Our goal is to find functions and such that we can write ; in such a way that every point ( ) in is mapped to a unique point ( ) in and every point in has a point in mapped to it. We call such pair of maps and a one-to-one and onto map from to .   and map into (from openstax)   A region G in the uv-axis system is mapped via the functions x equals g of u and v, and y equals h of u and v, onto the region R in the xy-axis system.   A region in the -axis system is mapped via the functions , and , onto the region in the -axis system.     Once you have found the functions and , the next question is what should the area scaling be so that the double integral over equals the double integral over .   The way we account for the area scaling is by using the Jacobian of the change of variables transformation.    The Jacobian of a Transformation   Given a transformation , where and are differentiable on a region of the -plane, the Jacobian determinant (Jacobian) of is given by .     Jacobians and Integrals  Let be a transformation that maps a closed and bounded region in the -plane to a region in the -plane. Assume is one-to-one on the interior of and and have continuous first partial derivatives there. If is continuous on , then .     Find the Jacobian of the change of variables .          In practice (when given an integral to evaluate), you choose substitutions using information from the integrand (or the bounds of integration).     Consider the iterated integral   From observing the integrand, using the substitutions and might simplify the integral.  (a) Given and , find functions and such that , .  (b) Given and , draw the new region of integration in the -plane.  (c) Compute the Jacobian of this change of variables.  (d) Set up the new integral in terms of and .             The graph of the new domain of integration on the uv-plane.     The new domain of integration on the uv-plane.         From the substitution choice we have the , from (b) we have the new bounds of integration and from (c) we have the Jacobian. Hence   For the first integral we will use the w-substitution          "
},
{
  "id": "fig-ch04-07-region-r",
  "level": "2",
  "url": "sec-ch04-07-ChangeOfVariables.html#fig-ch04-07-region-r",
  "type": "Figure",
  "number": "4.7.1",
  "title": "",
  "body": " A unit circle centred at the origin    "
},
{
  "id": "fig-ch04-07-region-g",
  "level": "2",
  "url": "sec-ch04-07-ChangeOfVariables.html#fig-ch04-07-region-g",
  "type": "Figure",
  "number": "4.7.2",
  "title": "",
  "body": " The region of the unit circle represented in the r-theta axis instead of the xy-axis. It is now a rectangle not a circle.    "
},
{
  "id": "sec-ch04-07-ChangeOfVariables-11",
  "level": "2",
  "url": "sec-ch04-07-ChangeOfVariables.html#sec-ch04-07-ChangeOfVariables-11",
  "type": "Note",
  "number": "4.7.1",
  "title": "",
  "body": " The idea of having an extra factor that accounts for changes in length\/area\/volume when changing regions of integration is something you have done before.  Consider the integral   The area we are calculating in this integral is pictured below:   The area represented by the integral from 1 to e, of the function ln(x) divided by x, integrated with respect to x, on the traditional xy-axis.     To evaluate this integral, we would apply the -substitution , to get the new integral   "
},
{
  "id": "sec-ch04-07-ChangeOfVariables-12",
  "level": "2",
  "url": "sec-ch04-07-ChangeOfVariables.html#sec-ch04-07-ChangeOfVariables-12",
  "type": "Note",
  "number": "4.7.2",
  "title": "",
  "body": " The area we are calculating with this integral is pictured below:   The area represented by the integral from 1 to e, of the function ln(x) divided by x, integrated with respect to x, after the u-substitution, on the new uy-axis system.     In the equation , the is playing the same role that is playing in . Specifically, is telling us that the interval in terms of is squeezed compared to , to accommodate the factor (as we see in the pictures).  "
},
{
  "id": "sec-ch04-07-ChangeOfVariables-13",
  "level": "2",
  "url": "sec-ch04-07-ChangeOfVariables.html#sec-ch04-07-ChangeOfVariables-13",
  "type": "Note",
  "number": "4.7.3",
  "title": "",
  "body": " Notice that if we removed the in , the integral in terms of would be which would give us a different answer.  "
},
{
  "id": "sec-ch04-07-ChangeOfVariables-15",
  "level": "2",
  "url": "sec-ch04-07-ChangeOfVariables.html#sec-ch04-07-ChangeOfVariables-15",
  "type": "Note",
  "number": "4.7.4",
  "title": "",
  "body": " When doing a change of variables when working with double integrals, we have many options (we can use more than polar coordinates)!  "
},
{
  "id": "fig-ch04-07-transformation",
  "level": "2",
  "url": "sec-ch04-07-ChangeOfVariables.html#fig-ch04-07-transformation",
  "type": "Figure",
  "number": "4.7.5",
  "title": "",
  "body": " and map into (from openstax)   A region G in the uv-axis system is mapped via the functions x equals g of u and v, and y equals h of u and v, onto the region R in the xy-axis system.   A region in the -axis system is mapped via the functions , and , onto the region in the -axis system.    "
},
{
  "id": "sec-ch04-07-ChangeOfVariables-19",
  "level": "2",
  "url": "sec-ch04-07-ChangeOfVariables.html#sec-ch04-07-ChangeOfVariables-19",
  "type": "Remark",
  "number": "4.7.5",
  "title": "",
  "body": " The way we account for the area scaling is by using the Jacobian of the change of variables transformation.  "
},
{
  "id": "sec-ch04-07-ChangeOfVariables-20",
  "level": "2",
  "url": "sec-ch04-07-ChangeOfVariables.html#sec-ch04-07-ChangeOfVariables-20",
  "type": "Definition",
  "number": "4.7.6",
  "title": "The Jacobian of a Transformation.",
  "body": " The Jacobian of a Transformation   Given a transformation , where and are differentiable on a region of the -plane, the Jacobian determinant (Jacobian) of is given by .   "
},
{
  "id": "sec-ch04-07-ChangeOfVariables-21",
  "level": "2",
  "url": "sec-ch04-07-ChangeOfVariables.html#sec-ch04-07-ChangeOfVariables-21",
  "type": "Remark",
  "number": "4.7.7",
  "title": "Jacobians and Integrals.",
  "body": " Jacobians and Integrals  Let be a transformation that maps a closed and bounded region in the -plane to a region in the -plane. Assume is one-to-one on the interior of and and have continuous first partial derivatives there. If is continuous on , then .  "
},
{
  "id": "example-ch04-07-ex-20-1",
  "level": "2",
  "url": "sec-ch04-07-ChangeOfVariables.html#example-ch04-07-ex-20-1",
  "type": "Example",
  "number": "4.7.8",
  "title": "",
  "body": "  Find the Jacobian of the change of variables .        "
},
{
  "id": "sec-ch04-07-ChangeOfVariables-23",
  "level": "2",
  "url": "sec-ch04-07-ChangeOfVariables.html#sec-ch04-07-ChangeOfVariables-23",
  "type": "Note",
  "number": "4.7.9",
  "title": "",
  "body": " In practice (when given an integral to evaluate), you choose substitutions using information from the integrand (or the bounds of integration).  "
},
{
  "id": "example-ch04-07-ex-20-2",
  "level": "2",
  "url": "sec-ch04-07-ChangeOfVariables.html#example-ch04-07-ex-20-2",
  "type": "Example",
  "number": "4.7.10",
  "title": "",
  "body": "  Consider the iterated integral   From observing the integrand, using the substitutions and might simplify the integral.  (a) Given and , find functions and such that , .  (b) Given and , draw the new region of integration in the -plane.  (c) Compute the Jacobian of this change of variables.  (d) Set up the new integral in terms of and .             The graph of the new domain of integration on the uv-plane.     The new domain of integration on the uv-plane.         From the substitution choice we have the , from (b) we have the new bounds of integration and from (c) we have the Jacobian. Hence   For the first integral we will use the w-substitution         "
},
{
  "id": "sec-ch04-08-TripleIntegralsCartesian",
  "level": "1",
  "url": "sec-ch04-08-TripleIntegralsCartesian.html",
  "type": "Section",
  "number": "4.8",
  "title": "Triple Integrals in Cartesian Coordinates",
  "body": " Triple Integrals in Cartesian Coordinates   We can use double integrals to calculate the net volume bounded by a surface(2-dimensional object, embedded in 3-dimensional space) and the -plane on a region in the -plane.  Now, given a function (3-dimensional object, embedded in 4-dimensional space) and a region in its domain (xyz-space), we will derive a way to calculate the 4-dimensional net hyper-volume bounded by and -space on .   In summary, we will partition the 4 -dimensional net volume into 4 -dimensional net volumes of 4D rectangular prisms. The process is as follows:     Partition the region of integration in -space into rectangular prisms.   The region and a typical rectangular prism (from openstax)   The region D and a typical rectangular prism.   The region and a typical rectangular prism.       Denote the volume of the -th rectangular prism as .      is the volume of the base of the -th 4 -dimensional prism.       Pick a point ( ) in the -th rectangular prism and evaluate .      is the height of the -th 4 -dimensional prism.        Now, we can approximate the 4 -dimensional net volume bounded by and -space, restricted to , by adding up the 4 -dimensional net volumes of the prisms. That is, and   We call this net volume the triple integral of over .   We will evaluate triple integrals by reducing the problem to a double integral, with an extra step.    Evaluating Triple Integrals  To integrate a continuous function over a 3 -dimensional region , rewrite the integral as follows:   Here, is the projection of the 3 -dimensional region into the plane.    To find the bounds of integration for :   The solid D between the surfaces z equals H of x and y, and z equals G of x and y, above the region R.        Draw vertical lines parallel to the -axis (from the negative to the positive direction).     Wherever these lines enter the region , this is the lower bound of integration with respect to .    Wherever these lines exit the region , this is the upper bound of integration with respect to .       Project (cast a shadow) of the 3 -dimensional region into the -plane.    Set up bounds for the other two integrals as you would do any other double integral.    In the end, your triple integral should have the form (depending on order of integration):        Volume as a Triple Integral  In order to compute the volume of a 3-dimensional solid , we can use the triple integral      Find the mass of a solid box bounded by the planes and , and and . The density (mass per unit volume) of the box is given by .   The solid box bounded by the planes x equals 0 and x equals 3, y equals 0 and y equals 1, z equals 0 and z equals 2.     The box in -space    The Mass can be calculated by sectioning the volume into small, manageable shapes, usually cubes and multiplying the volume of each cube with its density. Since the density is a non constant function, instead of a discrete sum we use the integral, which after all, is a the limit of a sum with infinite terms. Notice that since the bounds of integration for all variables are constants, one can freely choose the order of integration it suits them. Since it appears that integrating with respect to first is more manageable the integral is set up this way.   .      Use a triple integral to find the volume of the solid in the first octant ( ) bounded by the plane and the coordinate planes.   The solid in the first octant bounded by the plane x plus 2 y plus 3 z equals 4.       The coordinate plane equations are , , and . The plane or and intersect at the line of the -plane. For the intercepts of this line we have: and . From those points we see that the line segment we are interested at is in the first quadrant (the finite portion of this line). To see whether the plane is above or below the , we need a point in the triangle defined by the -axis, the -axis, and the previous line segment. Chose a value of within the bounds of the triangle, say . Now to be within the triangle, this point has to have coordinate less than the corresponding one of the line  and gives the point . For these and coordinates the coordinate of the plane is and hence our plane is above the plane .  Hence the bounds of integration with respect to are as the lower one and as the upper one. Since we now that our line segment is is in the first quadrant we can solve for and acquire the lower bound and the upper bound for . Lastly for we have and from the intercept of the line and the -axis, calculated above.       Set up (but do not evaluate) a triple integral to find the volume of the solid between the sphere and the cone , for .   The solid between the sphere x squared plus y squared plus z squared equals 5 and the cone z squared minus 4 x squared minus 4 y squared equals 0, for z greater or equal to 0.       Since we have the shape is above the -plane. The intersection of the two surfaces is given by .  Hence the region of the -plane that the integral will be over is the unit disk centred at the origin. Similarly past examples we acquire the bounds and . The last thing to be determined is if the cone is above the sphere or the other way around.    Using the coordinates and on the sphere while for the cone , hence the sphere is above the cone. This part of the sphere can be expressed as and this part of the cone as .      Changing Order of Integration  When integrating over a 3D region , you may change the order of integration of the iterated integrals (including the first\/innermost integral). The three things to remember are:     To find the bounds of integration for the inner integral, draw lines parallel to the axis of the variable of integration.     For example, if integrating in the order , you would draw lines parallel to the -axis.       Once you are done with the inner integral, you project into the plane containing the other two variables.     For example, if using the order , you would project into the -plane.       The bounds of integration for each integral (working inside to outside) are functions of the next variables of integration.     For example, when using the order , you would get            Set up (but do not evaluate) a triple integral to find the volume of the solid bounded by and .   The solid bounded by x equals 2 minus y squared and x equals y squared plus 2 z squared.     The region of integration     Since was provided as a function of and , the triple integral will be set up with the innermost integration being with respect to . For the intersect of the above surface one has . Hence the region of the -plane that the integral will be over is the unit disk centred at the origin. Similarly past examples we acquire the bounds and .  Using the coordinates and one sees that is above .     "
},
{
  "id": "sec-ch04-08-TripleIntegralsCartesian-2",
  "level": "2",
  "url": "sec-ch04-08-TripleIntegralsCartesian.html#sec-ch04-08-TripleIntegralsCartesian-2",
  "type": "Note",
  "number": "4.8.1",
  "title": "",
  "body": " We can use double integrals to calculate the net volume bounded by a surface(2-dimensional object, embedded in 3-dimensional space) and the -plane on a region in the -plane.  Now, given a function (3-dimensional object, embedded in 4-dimensional space) and a region in its domain (xyz-space), we will derive a way to calculate the 4-dimensional net hyper-volume bounded by and -space on .  "
},
{
  "id": "fig-ch04-08-rectangular-prism",
  "level": "2",
  "url": "sec-ch04-08-TripleIntegralsCartesian.html#fig-ch04-08-rectangular-prism",
  "type": "Figure",
  "number": "4.8.1",
  "title": "",
  "body": " The region and a typical rectangular prism (from openstax)   The region D and a typical rectangular prism.   The region and a typical rectangular prism.    "
},
{
  "id": "sec-ch04-08-TripleIntegralsCartesian-7",
  "level": "2",
  "url": "sec-ch04-08-TripleIntegralsCartesian.html#sec-ch04-08-TripleIntegralsCartesian-7",
  "type": "Note",
  "number": "4.8.2",
  "title": "",
  "body": " We will evaluate triple integrals by reducing the problem to a double integral, with an extra step.  "
},
{
  "id": "sec-ch04-08-TripleIntegralsCartesian-8",
  "level": "2",
  "url": "sec-ch04-08-TripleIntegralsCartesian.html#sec-ch04-08-TripleIntegralsCartesian-8",
  "type": "Remark",
  "number": "4.8.3",
  "title": "Evaluating Triple Integrals.",
  "body": " Evaluating Triple Integrals  To integrate a continuous function over a 3 -dimensional region , rewrite the integral as follows:   Here, is the projection of the 3 -dimensional region into the plane.  "
},
{
  "id": "sec-ch04-08-TripleIntegralsCartesian-9",
  "level": "2",
  "url": "sec-ch04-08-TripleIntegralsCartesian.html#sec-ch04-08-TripleIntegralsCartesian-9",
  "type": "Remark",
  "number": "4.8.4",
  "title": "",
  "body": " To find the bounds of integration for :   The solid D between the surfaces z equals H of x and y, and z equals G of x and y, above the region R.        Draw vertical lines parallel to the -axis (from the negative to the positive direction).     Wherever these lines enter the region , this is the lower bound of integration with respect to .    Wherever these lines exit the region , this is the upper bound of integration with respect to .       Project (cast a shadow) of the 3 -dimensional region into the -plane.    Set up bounds for the other two integrals as you would do any other double integral.    In the end, your triple integral should have the form (depending on order of integration):      "
},
{
  "id": "sec-ch04-08-TripleIntegralsCartesian-10",
  "level": "2",
  "url": "sec-ch04-08-TripleIntegralsCartesian.html#sec-ch04-08-TripleIntegralsCartesian-10",
  "type": "Note",
  "number": "4.8.5",
  "title": "Volume as a Triple Integral.",
  "body": " Volume as a Triple Integral  In order to compute the volume of a 3-dimensional solid , we can use the triple integral   "
},
{
  "id": "example-ch04-08-ex-21-1",
  "level": "2",
  "url": "sec-ch04-08-TripleIntegralsCartesian.html#example-ch04-08-ex-21-1",
  "type": "Example",
  "number": "4.8.6",
  "title": "",
  "body": "  Find the mass of a solid box bounded by the planes and , and and . The density (mass per unit volume) of the box is given by .   The solid box bounded by the planes x equals 0 and x equals 3, y equals 0 and y equals 1, z equals 0 and z equals 2.     The box in -space    The Mass can be calculated by sectioning the volume into small, manageable shapes, usually cubes and multiplying the volume of each cube with its density. Since the density is a non constant function, instead of a discrete sum we use the integral, which after all, is a the limit of a sum with infinite terms. Notice that since the bounds of integration for all variables are constants, one can freely choose the order of integration it suits them. Since it appears that integrating with respect to first is more manageable the integral is set up this way.   .   "
},
{
  "id": "example-ch04-08-ex-21-2",
  "level": "2",
  "url": "sec-ch04-08-TripleIntegralsCartesian.html#example-ch04-08-ex-21-2",
  "type": "Example",
  "number": "4.8.7",
  "title": "",
  "body": "  Use a triple integral to find the volume of the solid in the first octant ( ) bounded by the plane and the coordinate planes.   The solid in the first octant bounded by the plane x plus 2 y plus 3 z equals 4.       The coordinate plane equations are , , and . The plane or and intersect at the line of the -plane. For the intercepts of this line we have: and . From those points we see that the line segment we are interested at is in the first quadrant (the finite portion of this line). To see whether the plane is above or below the , we need a point in the triangle defined by the -axis, the -axis, and the previous line segment. Chose a value of within the bounds of the triangle, say . Now to be within the triangle, this point has to have coordinate less than the corresponding one of the line  and gives the point . For these and coordinates the coordinate of the plane is and hence our plane is above the plane .  Hence the bounds of integration with respect to are as the lower one and as the upper one. Since we now that our line segment is is in the first quadrant we can solve for and acquire the lower bound and the upper bound for . Lastly for we have and from the intercept of the line and the -axis, calculated above.    "
},
{
  "id": "example-ch04-08-ex-21-3",
  "level": "2",
  "url": "sec-ch04-08-TripleIntegralsCartesian.html#example-ch04-08-ex-21-3",
  "type": "Example",
  "number": "4.8.8",
  "title": "",
  "body": "  Set up (but do not evaluate) a triple integral to find the volume of the solid between the sphere and the cone , for .   The solid between the sphere x squared plus y squared plus z squared equals 5 and the cone z squared minus 4 x squared minus 4 y squared equals 0, for z greater or equal to 0.       Since we have the shape is above the -plane. The intersection of the two surfaces is given by .  Hence the region of the -plane that the integral will be over is the unit disk centred at the origin. Similarly past examples we acquire the bounds and . The last thing to be determined is if the cone is above the sphere or the other way around.    Using the coordinates and on the sphere while for the cone , hence the sphere is above the cone. This part of the sphere can be expressed as and this part of the cone as .    "
},
{
  "id": "sec-ch04-08-TripleIntegralsCartesian-14",
  "level": "2",
  "url": "sec-ch04-08-TripleIntegralsCartesian.html#sec-ch04-08-TripleIntegralsCartesian-14",
  "type": "Note",
  "number": "4.8.9",
  "title": "Changing Order of Integration.",
  "body": " Changing Order of Integration  When integrating over a 3D region , you may change the order of integration of the iterated integrals (including the first\/innermost integral). The three things to remember are:     To find the bounds of integration for the inner integral, draw lines parallel to the axis of the variable of integration.     For example, if integrating in the order , you would draw lines parallel to the -axis.       Once you are done with the inner integral, you project into the plane containing the other two variables.     For example, if using the order , you would project into the -plane.       The bounds of integration for each integral (working inside to outside) are functions of the next variables of integration.     For example, when using the order , you would get         "
},
{
  "id": "example-ch04-08-ex-21-4",
  "level": "2",
  "url": "sec-ch04-08-TripleIntegralsCartesian.html#example-ch04-08-ex-21-4",
  "type": "Example",
  "number": "4.8.10",
  "title": "",
  "body": "  Set up (but do not evaluate) a triple integral to find the volume of the solid bounded by and .   The solid bounded by x equals 2 minus y squared and x equals y squared plus 2 z squared.     The region of integration     Since was provided as a function of and , the triple integral will be set up with the innermost integration being with respect to . For the intersect of the above surface one has . Hence the region of the -plane that the integral will be over is the unit disk centred at the origin. Similarly past examples we acquire the bounds and .  Using the coordinates and one sees that is above .    "
},
{
  "id": "sec-ch04-09-TripleIntegralsCylindricalSpherical",
  "level": "1",
  "url": "sec-ch04-09-TripleIntegralsCylindricalSpherical.html",
  "type": "Section",
  "number": "4.9",
  "title": "Triple Integrals",
  "body": " Triple Integrals  in Cylindrical and Spherical Coordinates  We will now discuss the last two change of coordinates we will see in this class: cylindrical and spherical coordinates.   Any point in -space can be expressed in the form ( ) for , , and as shown below:    A point in cylindrical coordinates, rho, theta, z.      Cylindrical coordinates can simplify triple integrals in which the 3D region of integration is easily described in these coordinates. Below are a few examples of such regions:    From left to right: A cylindrical cell, a cone, a plane.      Formulas to Change from Cartesian to Cylindrical Coordinates  Given a point ( ) in 3-dimensional space, you can write it in cylindrical coordinates by using the formulas:               Given a point ( ) in 3-dimensional space, you can write it in Cartesian coordinates by using the formulas:           .      In practice, using cylindrical coordinates translates to evaluating the double integral of a triple integral using polar coordinates.   Writing a Triple Integral in Cylindrical Coordinates  To set up an iterated integral in cylindrical coordinates:     Use the order .    Find the bounds with respect to as we did in cartesian coordinates.    Project the 3 -dimensional region of integration into the plane to get a 2 -dimensional region .    Set up the bounds of integration for and as if you were finding the area of .    The iterated integral should have the form        Spherical Coordinates  Any point in -space can be expressed in the form ( ) for , , and as shown below:    A point in spherical coordinates      The angle is the same as in cylindrical coordinates (rotates 0 to in the -plane). The variable represents the radius of a sphere.  However, the angle starts at the positive -axis and rotates radians ending at the negative -axis.    Spherical coordinates can simplify triple integrals in which the 3D region of integration is easily described in these coordinates. Below are a few examples of such regions:     From left to right: A sphere, a cone, a plane.       Formulas to Change from Cartesian to Spherical Coordinates  Given a point ( ) in 3-dimensional space, you can write it in spherical coordinates by using the formulas:        Use trigonometry to find and .     Given a point ( ) in 3-dimensional space, you can write it in Cartesian coordinates by using the formulas:           .       Note that in spherical coordinates you need to replace as well.  You could geometrically (as we have done before) find the Jacobian of this change of variables. Instead, we will use the following formula.    Writing a Triple Integral in Spherical Coordinates  To set up an iterated integral in cylindrical coordinates:     Use the order .    Start from the origin and radiate outwards    The first function you encounter, preventing out from expanding outwards is the lower bound for , the second is the upper bound.    Start at the positive -axis and open outwards like a hand-held fan    The first function you encounter, preventing out from fanning outwards is the lower bound for , the second is the upper bound.    For , similar with the polar coordinates, the bounds stem from the largest counter-clockwise rotation a point can do within the region of integration.    The iterated integral should have the form        Evaluating a Triple Integral for Volume  As previously the integral that represents the volume of a region is calculated by the above integrals, by setting .     Set up (but do not evaluate) a triple integral, in spherical coordinates, of over the volume of the ice cream cone  bounded from above by the sphere , and from below by the cone (above the -plane).   The \"ice cream cone\" solid D, bounded by the sphere rho equals 4 cosine of phi, with phi less or equal to pi over 2, and the cone phi equals pi over 6.       Using the function transforms to . The upper bound for is given as while the lower bound is implied to be 0 since cones of the form pass through the origin (0,0,0), and when radiating away from the origin those cones do not obstruct.  Since the sphere and the cone encompass a portion of the positive -axis the lower bound for is 0, while the upper bound is provided as . Lastly there are no restrictions for hence the bounds for integration are 0 and receptively.         A solid region lies inside the paraboloid , and above the plane , as shown below. Express the triple integral in cylindrical coordinates, then evaluate it.   The paraboloid 4 minus x squared minus y squared minus z equals 0, and the plane z equals 3.       Using the function transforms to . The paraboloid and the plane intersect when . Since for the coordinate of the paraboloid is , the upper bound for z is given by the paraboloid and the lower by the plane.  The finite region for of the above intersection is given by . Lastly there are no restrictions for hence the bounds for integration are 0 and receptively.   .      Jacobian in Three Dimensions and Integrals   Let , and be a transformation that maps a closed and bounded region in -space to a region in -space. Assume is one-to-one on the interior of and that , and have continuous first partial derivatives there. If is continuous on , then where is the Jacobian of the transformation which measures how volume around a point ( ) change as we move to -space.      Let , and . Then,         Since . It follows that .      Set up (but do not evaluate) a triple integral that gives the volume of the ice cream cone  below the sphere , and above the cone .    Using the sphere transforms to (Restricting the values of to be non-negative). Using , and the cone transforms to since for . This implies that for , (The value is disregarded since we need ).  The upper bound for is given as while the lower bound is implied to be 0 since cones of the form pass through the origin (0,0,0), and when radiating away from the origin those cones do not obstruct.  Since the sphere and the cone encompass a portion of the positive -axis (between and ) the lower bound for is 0, while the upper bound is provided as . Lastly there are no restrictions for hence the bounds for integration are 0 and receptively.         Set up (but do not evaluate) a triple integral in spherical coordinates that gives the volume inside the ball and above the plane (pictured below).   The ball of radius 1 centred at the origin, and two planes z equals 0 and z equals one half.       Using the sphere transforms to (Restricting the values of to be non-negative). Using , the plane transforms to . To find the intersection of the two surfaces: .  Since the sphere and the cone encompass a portion of the positive -axis (between and )the lower bound for is 0, while the upper bound is provided as . As far as is concerned the upper bound is 1, the lower bound is implied by the equation to be . Lastly there are no restrictions for hence the bounds for integration are 0 and receptively.          Find the volume of the sphere .   A sphere of radius a, where a is greater than 0, centred at the origin.       Using the sphere transforms to (Restricting the values of to be non-negative). There are no restriction on and , hence their respective range is implied to be and .         Set up (but do not evaluate) a triple integral in spherical coordinates that gives the volume inside the ball and but outside the cylinder (from OpenStax).   The ball rho less or equal to 2 and the cylinder x squared plus y squared equals 1.       Using and , the cylinder transforms to  , since we restrict to have non-negative values and to be between and . To find the intersection of the two surfaces: . To investigate whether or not one needs to take into account the values of from to , and from to , notice that the -axis ( or ) lie inside NOT outside the cylinder since any point of the form has . Hence, the bounds for are and . As far as is concerned the upper bound is 2, the lower bound is implied by the equation to be . Lastly there are no restrictions for hence the bounds for integration are 0 and receptively.       Set up (but do not evaluate) a triple integral using cylindrical coordinates that gives the 4D net volume bounded by a function and -space, on a region bounded below by the plane , laterally by the circular cylinder , and above by the paraboloid .   The volume bounded below by the plane z equals 0, laterally by the circular cylinder, x minus 1, squared, plus y squared equals 1, and above by the paraboloid z equals 4 minus x squared minus y squared.       Using the paraboloid transforms to . For the cylinder , notice that it lies above the first and forth quadrants. hence much be on a sub-interval of . Utilizing and , one has For the range of mentioned above, and hence one has the lower and upper bound for as and respectively. Lastly, to verify that the ranges over and not a subinterval, observe that the second coordinate of the points of this circle satisfies . In this expression for the coordinate is 0, in between and is negative, between and is positive and at the coordinate is 0 again. Hence we traverse the circle exactly once over this interval of .  (A more rigorous argument will involve to suppose that there are 2 value of in this interval, say and , for which the and are fixed and arrive to a contradiction, but this previous argument is adequate for the purpose of the course in the case that we cannot draw a graph).      "
},
{
  "id": "sec-ch04-09-TripleIntegralsCylindricalSpherical-4",
  "level": "2",
  "url": "sec-ch04-09-TripleIntegralsCylindricalSpherical.html#sec-ch04-09-TripleIntegralsCylindricalSpherical-4",
  "type": "Note",
  "number": "4.9.1",
  "title": "",
  "body": " Any point in -space can be expressed in the form ( ) for , , and as shown below:  "
},
{
  "id": "fig-ch04-09-cylindrical-point",
  "level": "2",
  "url": "sec-ch04-09-TripleIntegralsCylindricalSpherical.html#fig-ch04-09-cylindrical-point",
  "type": "Figure",
  "number": "4.9.1",
  "title": "",
  "body": " A point in cylindrical coordinates, rho, theta, z.    "
},
{
  "id": "sec-ch04-09-TripleIntegralsCylindricalSpherical-6",
  "level": "2",
  "url": "sec-ch04-09-TripleIntegralsCylindricalSpherical.html#sec-ch04-09-TripleIntegralsCylindricalSpherical-6",
  "type": "Note",
  "number": "4.9.2",
  "title": "",
  "body": " Cylindrical coordinates can simplify triple integrals in which the 3D region of integration is easily described in these coordinates. Below are a few examples of such regions:  "
},
{
  "id": "fig-ch04-09-cylindrical-regions",
  "level": "2",
  "url": "sec-ch04-09-TripleIntegralsCylindricalSpherical.html#fig-ch04-09-cylindrical-regions",
  "type": "Figure",
  "number": "4.9.2",
  "title": "",
  "body": " From left to right: A cylindrical cell, a cone, a plane.    "
},
{
  "id": "sec-ch04-09-TripleIntegralsCylindricalSpherical-8",
  "level": "2",
  "url": "sec-ch04-09-TripleIntegralsCylindricalSpherical.html#sec-ch04-09-TripleIntegralsCylindricalSpherical-8",
  "type": "Remark",
  "number": "4.9.3",
  "title": "Formulas to Change from Cartesian to Cylindrical Coordinates.",
  "body": " Formulas to Change from Cartesian to Cylindrical Coordinates  Given a point ( ) in 3-dimensional space, you can write it in cylindrical coordinates by using the formulas:               Given a point ( ) in 3-dimensional space, you can write it in Cartesian coordinates by using the formulas:           .     "
},
{
  "id": "sec-ch04-09-TripleIntegralsCylindricalSpherical-10",
  "level": "2",
  "url": "sec-ch04-09-TripleIntegralsCylindricalSpherical.html#sec-ch04-09-TripleIntegralsCylindricalSpherical-10",
  "type": "Remark",
  "number": "4.9.4",
  "title": "Writing a Triple Integral in Cylindrical Coordinates.",
  "body": " Writing a Triple Integral in Cylindrical Coordinates  To set up an iterated integral in cylindrical coordinates:     Use the order .    Find the bounds with respect to as we did in cartesian coordinates.    Project the 3 -dimensional region of integration into the plane to get a 2 -dimensional region .    Set up the bounds of integration for and as if you were finding the area of .    The iterated integral should have the form      "
},
{
  "id": "sec-ch04-09-TripleIntegralsCylindricalSpherical-11",
  "level": "2",
  "url": "sec-ch04-09-TripleIntegralsCylindricalSpherical.html#sec-ch04-09-TripleIntegralsCylindricalSpherical-11",
  "type": "Note",
  "number": "4.9.5",
  "title": "Spherical Coordinates.",
  "body": " Spherical Coordinates  Any point in -space can be expressed in the form ( ) for , , and as shown below:  "
},
{
  "id": "fig-ch04-09-spherical-point",
  "level": "2",
  "url": "sec-ch04-09-TripleIntegralsCylindricalSpherical.html#fig-ch04-09-spherical-point",
  "type": "Figure",
  "number": "4.9.3",
  "title": "",
  "body": " A point in spherical coordinates    "
},
{
  "id": "sec-ch04-09-TripleIntegralsCylindricalSpherical-13",
  "level": "2",
  "url": "sec-ch04-09-TripleIntegralsCylindricalSpherical.html#sec-ch04-09-TripleIntegralsCylindricalSpherical-13",
  "type": "Remark",
  "number": "4.9.6",
  "title": "",
  "body": " The angle is the same as in cylindrical coordinates (rotates 0 to in the -plane). The variable represents the radius of a sphere.  However, the angle starts at the positive -axis and rotates radians ending at the negative -axis.  "
},
{
  "id": "sec-ch04-09-TripleIntegralsCylindricalSpherical-14",
  "level": "2",
  "url": "sec-ch04-09-TripleIntegralsCylindricalSpherical.html#sec-ch04-09-TripleIntegralsCylindricalSpherical-14",
  "type": "Note",
  "number": "4.9.7",
  "title": "",
  "body": " Spherical coordinates can simplify triple integrals in which the 3D region of integration is easily described in these coordinates. Below are a few examples of such regions:  "
},
{
  "id": "fig-ch04-09-spherical-regions",
  "level": "2",
  "url": "sec-ch04-09-TripleIntegralsCylindricalSpherical.html#fig-ch04-09-spherical-regions",
  "type": "Figure",
  "number": "4.9.4",
  "title": "",
  "body": " From left to right: A sphere, a cone, a plane.    "
},
{
  "id": "sec-ch04-09-TripleIntegralsCylindricalSpherical-16",
  "level": "2",
  "url": "sec-ch04-09-TripleIntegralsCylindricalSpherical.html#sec-ch04-09-TripleIntegralsCylindricalSpherical-16",
  "type": "Remark",
  "number": "4.9.8",
  "title": "Formulas to Change from Cartesian to Spherical Coordinates.",
  "body": " Formulas to Change from Cartesian to Spherical Coordinates  Given a point ( ) in 3-dimensional space, you can write it in spherical coordinates by using the formulas:        Use trigonometry to find and .     Given a point ( ) in 3-dimensional space, you can write it in Cartesian coordinates by using the formulas:           .     "
},
{
  "id": "sec-ch04-09-TripleIntegralsCylindricalSpherical-17",
  "level": "2",
  "url": "sec-ch04-09-TripleIntegralsCylindricalSpherical.html#sec-ch04-09-TripleIntegralsCylindricalSpherical-17",
  "type": "Note",
  "number": "4.9.9",
  "title": "",
  "body": " Note that in spherical coordinates you need to replace as well.  You could geometrically (as we have done before) find the Jacobian of this change of variables. Instead, we will use the following formula.  "
},
{
  "id": "sec-ch04-09-TripleIntegralsCylindricalSpherical-18",
  "level": "2",
  "url": "sec-ch04-09-TripleIntegralsCylindricalSpherical.html#sec-ch04-09-TripleIntegralsCylindricalSpherical-18",
  "type": "Remark",
  "number": "4.9.10",
  "title": "Writing a Triple Integral in Spherical Coordinates.",
  "body": " Writing a Triple Integral in Spherical Coordinates  To set up an iterated integral in cylindrical coordinates:     Use the order .    Start from the origin and radiate outwards    The first function you encounter, preventing out from expanding outwards is the lower bound for , the second is the upper bound.    Start at the positive -axis and open outwards like a hand-held fan    The first function you encounter, preventing out from fanning outwards is the lower bound for , the second is the upper bound.    For , similar with the polar coordinates, the bounds stem from the largest counter-clockwise rotation a point can do within the region of integration.    The iterated integral should have the form      "
},
{
  "id": "sec-ch04-09-TripleIntegralsCylindricalSpherical-19",
  "level": "2",
  "url": "sec-ch04-09-TripleIntegralsCylindricalSpherical.html#sec-ch04-09-TripleIntegralsCylindricalSpherical-19",
  "type": "Note",
  "number": "4.9.11",
  "title": "Evaluating a Triple Integral for Volume.",
  "body": " Evaluating a Triple Integral for Volume  As previously the integral that represents the volume of a region is calculated by the above integrals, by setting .  "
},
{
  "id": "example-ch04-09-ex-22-1",
  "level": "2",
  "url": "sec-ch04-09-TripleIntegralsCylindricalSpherical.html#example-ch04-09-ex-22-1",
  "type": "Example",
  "number": "4.9.12",
  "title": "",
  "body": "  Set up (but do not evaluate) a triple integral, in spherical coordinates, of over the volume of the ice cream cone  bounded from above by the sphere , and from below by the cone (above the -plane).   The \"ice cream cone\" solid D, bounded by the sphere rho equals 4 cosine of phi, with phi less or equal to pi over 2, and the cone phi equals pi over 6.       Using the function transforms to . The upper bound for is given as while the lower bound is implied to be 0 since cones of the form pass through the origin (0,0,0), and when radiating away from the origin those cones do not obstruct.  Since the sphere and the cone encompass a portion of the positive -axis the lower bound for is 0, while the upper bound is provided as . Lastly there are no restrictions for hence the bounds for integration are 0 and receptively.      "
},
{
  "id": "example-ch04-09-ex-22-2",
  "level": "2",
  "url": "sec-ch04-09-TripleIntegralsCylindricalSpherical.html#example-ch04-09-ex-22-2",
  "type": "Example",
  "number": "4.9.13",
  "title": "",
  "body": "  A solid region lies inside the paraboloid , and above the plane , as shown below. Express the triple integral in cylindrical coordinates, then evaluate it.   The paraboloid 4 minus x squared minus y squared minus z equals 0, and the plane z equals 3.       Using the function transforms to . The paraboloid and the plane intersect when . Since for the coordinate of the paraboloid is , the upper bound for z is given by the paraboloid and the lower by the plane.  The finite region for of the above intersection is given by . Lastly there are no restrictions for hence the bounds for integration are 0 and receptively.   .   "
},
{
  "id": "sec-ch04-09-TripleIntegralsCylindricalSpherical-22",
  "level": "2",
  "url": "sec-ch04-09-TripleIntegralsCylindricalSpherical.html#sec-ch04-09-TripleIntegralsCylindricalSpherical-22",
  "type": "Definition",
  "number": "4.9.14",
  "title": "Jacobian in Three Dimensions and Integrals.",
  "body": " Jacobian in Three Dimensions and Integrals   Let , and be a transformation that maps a closed and bounded region in -space to a region in -space. Assume is one-to-one on the interior of and that , and have continuous first partial derivatives there. If is continuous on , then where is the Jacobian of the transformation which measures how volume around a point ( ) change as we move to -space.   "
},
{
  "id": "example-ch04-09-ex-22-3",
  "level": "2",
  "url": "sec-ch04-09-TripleIntegralsCylindricalSpherical.html#example-ch04-09-ex-22-3",
  "type": "Example",
  "number": "4.9.15",
  "title": "",
  "body": "  Let , and . Then,         Since . It follows that .   "
},
{
  "id": "example-ch04-09-ex-22-4",
  "level": "2",
  "url": "sec-ch04-09-TripleIntegralsCylindricalSpherical.html#example-ch04-09-ex-22-4",
  "type": "Example",
  "number": "4.9.16",
  "title": "",
  "body": "  Set up (but do not evaluate) a triple integral that gives the volume of the ice cream cone  below the sphere , and above the cone .    Using the sphere transforms to (Restricting the values of to be non-negative). Using , and the cone transforms to since for . This implies that for , (The value is disregarded since we need ).  The upper bound for is given as while the lower bound is implied to be 0 since cones of the form pass through the origin (0,0,0), and when radiating away from the origin those cones do not obstruct.  Since the sphere and the cone encompass a portion of the positive -axis (between and ) the lower bound for is 0, while the upper bound is provided as . Lastly there are no restrictions for hence the bounds for integration are 0 and receptively.      "
},
{
  "id": "example-ch04-09-ex-22-5",
  "level": "2",
  "url": "sec-ch04-09-TripleIntegralsCylindricalSpherical.html#example-ch04-09-ex-22-5",
  "type": "Example",
  "number": "4.9.17",
  "title": "",
  "body": "  Set up (but do not evaluate) a triple integral in spherical coordinates that gives the volume inside the ball and above the plane (pictured below).   The ball of radius 1 centred at the origin, and two planes z equals 0 and z equals one half.       Using the sphere transforms to (Restricting the values of to be non-negative). Using , the plane transforms to . To find the intersection of the two surfaces: .  Since the sphere and the cone encompass a portion of the positive -axis (between and )the lower bound for is 0, while the upper bound is provided as . As far as is concerned the upper bound is 1, the lower bound is implied by the equation to be . Lastly there are no restrictions for hence the bounds for integration are 0 and receptively.      "
},
{
  "id": "example-ch04-09-ex-22-6",
  "level": "2",
  "url": "sec-ch04-09-TripleIntegralsCylindricalSpherical.html#example-ch04-09-ex-22-6",
  "type": "Example",
  "number": "4.9.18",
  "title": "",
  "body": "  Find the volume of the sphere .   A sphere of radius a, where a is greater than 0, centred at the origin.       Using the sphere transforms to (Restricting the values of to be non-negative). There are no restriction on and , hence their respective range is implied to be and .      "
},
{
  "id": "example-ch04-09-ex-22-7",
  "level": "2",
  "url": "sec-ch04-09-TripleIntegralsCylindricalSpherical.html#example-ch04-09-ex-22-7",
  "type": "Example",
  "number": "4.9.19",
  "title": "",
  "body": "  Set up (but do not evaluate) a triple integral in spherical coordinates that gives the volume inside the ball and but outside the cylinder (from OpenStax).   The ball rho less or equal to 2 and the cylinder x squared plus y squared equals 1.       Using and , the cylinder transforms to  , since we restrict to have non-negative values and to be between and . To find the intersection of the two surfaces: . To investigate whether or not one needs to take into account the values of from to , and from to , notice that the -axis ( or ) lie inside NOT outside the cylinder since any point of the form has . Hence, the bounds for are and . As far as is concerned the upper bound is 2, the lower bound is implied by the equation to be . Lastly there are no restrictions for hence the bounds for integration are 0 and receptively.    "
},
{
  "id": "example-ch04-09-ex-22-8",
  "level": "2",
  "url": "sec-ch04-09-TripleIntegralsCylindricalSpherical.html#example-ch04-09-ex-22-8",
  "type": "Example",
  "number": "4.9.20",
  "title": "",
  "body": "  Set up (but do not evaluate) a triple integral using cylindrical coordinates that gives the 4D net volume bounded by a function and -space, on a region bounded below by the plane , laterally by the circular cylinder , and above by the paraboloid .   The volume bounded below by the plane z equals 0, laterally by the circular cylinder, x minus 1, squared, plus y squared equals 1, and above by the paraboloid z equals 4 minus x squared minus y squared.       Using the paraboloid transforms to . For the cylinder , notice that it lies above the first and forth quadrants. hence much be on a sub-interval of . Utilizing and , one has For the range of mentioned above, and hence one has the lower and upper bound for as and respectively. Lastly, to verify that the ranges over and not a subinterval, observe that the second coordinate of the points of this circle satisfies . In this expression for the coordinate is 0, in between and is negative, between and is positive and at the coordinate is 0 again. Hence we traverse the circle exactly once over this interval of .  (A more rigorous argument will involve to suppose that there are 2 value of in this interval, say and , for which the and are fixed and arrive to a contradiction, but this previous argument is adequate for the purpose of the course in the case that we cannot draw a graph).    "
},
{
  "id": "sec-ch05-01-VectorFieldsAndLineIntegrals",
  "level": "1",
  "url": "sec-ch05-01-VectorFieldsAndLineIntegrals.html",
  "type": "Section",
  "number": "5.1",
  "title": "Vector Fields and Line Integrals",
  "body": " Vector Fields and Line Integrals   So far, we have studied two types of functions:     Vector-valued functions (one input variable, multiple output variables) of the form .    Scalar-valued functions (multiple input variables, one output variable) of the form .     Now, we will look at functions of multiple input variables and multiple output variables.    Vector Fields in   A function of the form is a vector field in the -plane.  The vector field assigns to each point ( ) in the -plane, a vector .     With vector fields, we don't put the vectors back into standard position (since the starting location of each vector gives us important information).    (left) and (right)    The vector field F with first coordinate 1 minus y, second coordinate 0.      The vector field F with first coordinate minus y, second coordinate minus x.       The graphs above show only the plots; you can drag and zoom them. To see the expressions behind them, or to save a copy and create your own version of the graphs, open them in a new page from here: link to the left graph , link to the right graph     Plot the vector field .     The vector field F with first coordinate minus x, second coordinate minus y.          Identify the correct sketch of the vector field .   The four candidate sketches, A to D from left to right.    A vector field with vectors pointing towards the y-axis and away from x-axis, decreasing in magnitude as we move closer to the origin      A vector field with vectors pointing away from the y-axis and away from x-axis, decreasing in magnitude as we move closer to the origin      A vector field with vectors pointing towards seemingly random directions, their magnitude appears unaffected by their location.      The vector field with vectors whose direction creates a clockwise swirl, decreasing in magnitude as we move closer to the origin       The graphs above show only the plots; you can drag and zoom them. To see the expressions behind them, or to save a copy and create your own version of the graphs, open them in a new page from here: link to graph A , link to graph B , link to graph C , link to graph D     The correct answer is B.     Vector Fields in   A function of the form is a vector field in -space.  The vector field assigns to each point ( ) in -space, a vector .     Suppose that an electron is moving in a magnetic field. If it is moving in the direction of the field, then it accelerates (energy is being transferred to the electron). How can we measure that energy transfer?  We will start by deriving a way to integrate a vector field over a 2D curve in its domain. We will call such an integral a vector field line integral.    Derivation of a Vector Field Line Integral  Suppose you start with an oriented curve parametrized as , and with a vector field . We follow a similar process as with scalar line integrals.  We start by partitioning into pieces of arc length . Second, we pick a point ( ) in the -th segment of .  Now, when computing scalar line integrals, if we were integrating a surface , we would multiply by . When integrating a vector field, we can't do this since is a vector, not a number. Hence, we instead use the quantity , where and is the unit tangent vector to at the point .   From OpenStax   The projection of a vector of the vector field onto the tangent vector of a curve.   The projection of a vector of the vector field onto the tangent vector of a curve.     Finally, we add these quantities up and take the limit as the number of segments approaches infinity to get    Important: We can interpret as adding up the scalar component of (the vector field) in the direction of (the curve) at each point along .     Evaluating a Vector Field Line Integral  We can find a nice computational formula for by noting that and hence     Evaluating Vector Field Line Integral  Let be a smooth curve parametrized by , and be a (continuous) vector field over a region containing . Then the vector field line integral of over is evaluated as      Evaluate where on the following oriented curves in the plane:  (a) The quarter-circle from to (in black).  (b) The quarter-circle - from to .  (c) The path from to via two line segments through (in red).   On the background the part of the unit circle belonging on the first quadrant, the line segments starting from the origin to and ending to the 1 of the x and y axis respectively. On the foreground a vector field whose vectors create a clockwise swirl and their magnitude increases away from the origin.            b)   c)       Consider the vector field and the curves , and . Note that both curves start at and end at . Verify that .   On the background the part of the unit circle belonging on the first and second quadrant, and the line segment starting from (1,0) and ending at (-1,0). On the foreground a vector field whose vectors create a counter-clockwise swirl.                  Two things to note from and that are true in general:     Given a curve in the domain of a vector field ,     Given a vector field , two points in its domain, and two different curves and connecting and , in most cases,      In general, different curves connecting two points give different values for line integrals.          Direction Interpretation  Given a vector field , a curve parametrized as , and a point ( ) on the curve, since can be positive or negative (depending on the angle between the vectors), the line integral can be positive or negative.  Hence, we can sometimes determine whether is positive or negative by looking at the angles between the vectors:     If for most of the curve, the angle between and satisfies , then we expect .    If for most of the curve, the angle between and satisfies , then we expect .    It is also possible for (for example, if for all points on .        Consider the vector field and curves plotted below. Use these plots to determine the sign of along each curve.   On the background a circle centred at the origin and traversed clockwise and in a different colour a line segment on the positive part of x -axis, traversed from left to right. On the foreground a vector field whose vectors create a clockwise swirl and their magnitude increases away from the origin.       Let be the circle as traversed above and be the line segment as traversed above. Notice that at any given point the tangent vector of will match the vectors of the field. Hence one can infer that . For notice that its tangent vector is perpendicular to the vectors of the field. Since the integral represents the integral of a dot product between the vector field and the tangent vector of the parametrization of the curve, given that those are perpendicular, one can infer that .     When a force (given by the vector field vectors) acts on an object\/particle moving along a curve (a particle\/curve system), we say the vector field is doing work on the system.    Vector Field Line Integrals as Work   Let be a continuous force field and let be a smooth oriented curve in its domain. The work done by on the system given by a particle moving along is       Find the work done by the force field acting on the curve\/particle system given by .   On the foreground 3-dimensional vector field with vectors swirling about the x-axis, on the background the curve traced by the vector r of t with coordinates x = t squared, y = t cubed, z = t, for t from 0 to 1.             Work Interpretation  Under the work interpretation, it is important to understand what positive, negative, and zero work mean:     If , energy is being gained by the curve\/particle system (in the form of kinetic and potential energy).    If , energy is being lost by the curve\/particle system (in the form of heat, friction, etc.).    If , this does not mean the vector field forces didn't affect the system, more generally, the amount of energy gained was the same as the energy lost.       Recall: A curve is:     Smooth: If it has no sharp edges\/corners.    Closed: If it is a loop (has no discernible starting\/ending point).    Simple: If it doesn't cross itself.     We call a curve that is simple, closed, and smooth, a SCS curve.    Suppose you have a 2-dimensional vector field and a SCS curve in its domain. We define the circulation of along as a measure of how much the vector field (vectors) points in the direction of (the unit tangent vectors of . That is, we define the circulation of along precisely as    A boat traversing on a closed simple curve, placed over a clockwise rotating current.       Vector Field Line Integrals as Circulation   Let be a 2-dimensional continuous force field and let be a SCS curve in its domain. The circulation of along is computed as      Circulation Interpretation  If the path is not closed that we call this Flow . When we are talking about circulation along a boundary, the sign of the integral tells us the following:     If , most of the vector field is in the direction of . Hence, most particles (whose motion is represented by ) are moving along in the same orientation (as ).    If , most of the vector field is in the direction opposite of . Hence, most particles are moving along in the opposite orientation.    If , there is no discernible motion along .        Given the vector field and the curve parametrized by , , determine whether most of the vector field is in the direction of .   on the background the unit circle centred at the origin, on the foreground a vector field whose vectors point away from the line y equals x and towards the x-axis, with increasing magnitude away from the origin.             Although we will mostly work with SCS curves when talking about circulation, we can generalize this idea to curves that are piece-wise smooth (a union of smooth curves connected at their endpoints).  We call a simple, closed, piece-wise smooth curve a SCPS curve.     Set up (but do not evaluate) a line integral (as a sum of integrals) that gives the circulation of the vector field along the SCPS curve , traversed counter-clockwise, shown below (First quadrant of the unit circle, and line segments on the respective axes).   On the background the part of the unit circle belonging on the first quadrant, the line segments starting from the origin to and ending to the 1 of the x and y axis respectively. On the foreground a vector field whose vectors are fixed on each vertical line. In each of those lines they point from left to right while at the same time their up-down direction is proportional to the x coordinate of the point they originate.             In defining the circulation of a vector field along a closed curve , we were interested in the scalar component of the vector field in the direction of (measured using ), which is why we used .    Flux of a Vector Field  For flux, instead of wanting to measure how much of the vector field is in the direction of , we instead want to measure how much of the vector field is normal\/perpendicular\/orthogonal to . Hence, instead of using the scalar component of in the direction of a unit tangent vector , we will use the scalar component of in the direction of (a unit vector normal to ). Hence, we will define the flux of on across as    On the background a vector field, on the foreground a simple closed smooth curve, traversed counter-clockwise, and vectors placed on it, on a direction perpendicular to its tangent vector.       Vector Field Line Integrals as Flux   Let be a 2 -dimensional continuous vector field and let be a SCPS oriented curve in its domain parametrized by and oriented counter clockwise. Let , a normal vector that points to the right of the direction that the curve is parametrized with, and the unit normal vector in its direction. The flux of across is computed as      When we are talking about flux across a boundary, the sign of the integral tells us the following:     If , most of the vector field points away from . Hence, most particles (whose motion is represented by ) are moving from inside towards the outside.    If , most of the vector field points towards (the inside of) . Hence, most particles are moving from outside towards the inside.    If , the same amount of particles (could be none) are entering and exiting the region .        Determine whether most particles, whose motion is represented by , are entering or exiting across the ellipse , .           Determine whether most particles, whose motion is represented by , are entering or exiting across the ellipse , .          Summary of Interpretations  For the line integral :     Directional interpretation.     If for most of the curve, the angle between and satisfies , then we expect .    If for most of the curve, the angle between and satisfies , then we expect .    It is also possible for (for example, if for all points on ).       Work interpretation.     If , energy is being gained by the curve\/particle system (in the form of kinetic and potential energy).    If , energy is being lost by the curve\/particle system (in the form of heat, friction, etc.).    If , this does not mean the vector field forces didn't affect the system, more generally, the amount of energy gained was the same as the energy lost.       Circulation Interpretation (if is simple, closed, piece-wise smooth):     If , most of the vector field is in the direction of . Hence, most particles (whose motion is represented by ) are moving along in the same orientation (as ).    If , most of the vector field is in the direction opposite of . Hence, most particles are moving along in the opposite orientation.    If , there is no discernible motion along .        For the integral , when is a simple, closed, piece-wise smooth curve enclosing a region , oriented counter-clockwise:     Flux interpretation :     If , most of the vector field points away from . Hence, most particles (whose motion is represented by ) are moving from inside towards the outside.    If , most of the vector field points towards (the inside of) . Hence, most particles are moving from outside towards the inside.    If , the same amount of particles (could be none) are entering and exiting the region .         "
},
{
  "id": "sec-ch05-01-VectorFieldsAndLineIntegrals-2",
  "level": "2",
  "url": "sec-ch05-01-VectorFieldsAndLineIntegrals.html#sec-ch05-01-VectorFieldsAndLineIntegrals-2",
  "type": "Note",
  "number": "5.1.1",
  "title": "",
  "body": " So far, we have studied two types of functions:     Vector-valued functions (one input variable, multiple output variables) of the form .    Scalar-valued functions (multiple input variables, one output variable) of the form .     Now, we will look at functions of multiple input variables and multiple output variables.  "
},
{
  "id": "sec-ch05-01-VectorFieldsAndLineIntegrals-3",
  "level": "2",
  "url": "sec-ch05-01-VectorFieldsAndLineIntegrals.html#sec-ch05-01-VectorFieldsAndLineIntegrals-3",
  "type": "Definition",
  "number": "5.1.2",
  "title": "Vector Fields in <span class=\"process-math\">\\(\\mathbb{R}^{2}\\)<\/span>.",
  "body": " Vector Fields in   A function of the form is a vector field in the -plane.  The vector field assigns to each point ( ) in the -plane, a vector .   "
},
{
  "id": "sec-ch05-01-VectorFieldsAndLineIntegrals-4",
  "level": "2",
  "url": "sec-ch05-01-VectorFieldsAndLineIntegrals.html#sec-ch05-01-VectorFieldsAndLineIntegrals-4",
  "type": "Remark",
  "number": "5.1.3",
  "title": "",
  "body": " With vector fields, we don't put the vectors back into standard position (since the starting location of each vector gives us important information).  "
},
{
  "id": "fig-ch05-01-vector-fields",
  "level": "2",
  "url": "sec-ch05-01-VectorFieldsAndLineIntegrals.html#fig-ch05-01-vector-fields",
  "type": "Figure",
  "number": "5.1.1",
  "title": "",
  "body": " (left) and (right)    The vector field F with first coordinate 1 minus y, second coordinate 0.      The vector field F with first coordinate minus y, second coordinate minus x.      "
},
{
  "id": "example-ch05-01-ex-23-1",
  "level": "2",
  "url": "sec-ch05-01-VectorFieldsAndLineIntegrals.html#example-ch05-01-ex-23-1",
  "type": "Example",
  "number": "5.1.4",
  "title": "",
  "body": "  Plot the vector field .     The vector field F with first coordinate minus x, second coordinate minus y.      "
},
{
  "id": "example-ch05-01-ex-23-2",
  "level": "2",
  "url": "sec-ch05-01-VectorFieldsAndLineIntegrals.html#example-ch05-01-ex-23-2",
  "type": "Example",
  "number": "5.1.5",
  "title": "",
  "body": "  Identify the correct sketch of the vector field .   The four candidate sketches, A to D from left to right.    A vector field with vectors pointing towards the y-axis and away from x-axis, decreasing in magnitude as we move closer to the origin      A vector field with vectors pointing away from the y-axis and away from x-axis, decreasing in magnitude as we move closer to the origin      A vector field with vectors pointing towards seemingly random directions, their magnitude appears unaffected by their location.      The vector field with vectors whose direction creates a clockwise swirl, decreasing in magnitude as we move closer to the origin       The graphs above show only the plots; you can drag and zoom them. To see the expressions behind them, or to save a copy and create your own version of the graphs, open them in a new page from here: link to graph A , link to graph B , link to graph C , link to graph D     The correct answer is B.   "
},
{
  "id": "sec-ch05-01-VectorFieldsAndLineIntegrals-9",
  "level": "2",
  "url": "sec-ch05-01-VectorFieldsAndLineIntegrals.html#sec-ch05-01-VectorFieldsAndLineIntegrals-9",
  "type": "Definition",
  "number": "5.1.6",
  "title": "Vector Fields in <span class=\"process-math\">\\(\\mathbb{R}^{3}\\)<\/span>.",
  "body": " Vector Fields in   A function of the form is a vector field in -space.  The vector field assigns to each point ( ) in -space, a vector .   "
},
{
  "id": "sec-ch05-01-VectorFieldsAndLineIntegrals-10",
  "level": "2",
  "url": "sec-ch05-01-VectorFieldsAndLineIntegrals.html#sec-ch05-01-VectorFieldsAndLineIntegrals-10",
  "type": "Note",
  "number": "5.1.7",
  "title": "",
  "body": " Suppose that an electron is moving in a magnetic field. If it is moving in the direction of the field, then it accelerates (energy is being transferred to the electron). How can we measure that energy transfer?  We will start by deriving a way to integrate a vector field over a 2D curve in its domain. We will call such an integral a vector field line integral.  "
},
{
  "id": "sec-ch05-01-VectorFieldsAndLineIntegrals-11",
  "level": "2",
  "url": "sec-ch05-01-VectorFieldsAndLineIntegrals.html#sec-ch05-01-VectorFieldsAndLineIntegrals-11",
  "type": "Remark",
  "number": "5.1.8",
  "title": "Derivation of a Vector Field Line Integral.",
  "body": " Derivation of a Vector Field Line Integral  Suppose you start with an oriented curve parametrized as , and with a vector field . We follow a similar process as with scalar line integrals.  We start by partitioning into pieces of arc length . Second, we pick a point ( ) in the -th segment of .  Now, when computing scalar line integrals, if we were integrating a surface , we would multiply by . When integrating a vector field, we can't do this since is a vector, not a number. Hence, we instead use the quantity , where and is the unit tangent vector to at the point .   From OpenStax   The projection of a vector of the vector field onto the tangent vector of a curve.   The projection of a vector of the vector field onto the tangent vector of a curve.     Finally, we add these quantities up and take the limit as the number of segments approaches infinity to get    Important: We can interpret as adding up the scalar component of (the vector field) in the direction of (the curve) at each point along .   "
},
{
  "id": "sec-ch05-01-VectorFieldsAndLineIntegrals-12",
  "level": "2",
  "url": "sec-ch05-01-VectorFieldsAndLineIntegrals.html#sec-ch05-01-VectorFieldsAndLineIntegrals-12",
  "type": "Note",
  "number": "5.1.9",
  "title": "Evaluating a Vector Field Line Integral.",
  "body": " Evaluating a Vector Field Line Integral  We can find a nice computational formula for by noting that and hence   "
},
{
  "id": "sec-ch05-01-VectorFieldsAndLineIntegrals-13",
  "level": "2",
  "url": "sec-ch05-01-VectorFieldsAndLineIntegrals.html#sec-ch05-01-VectorFieldsAndLineIntegrals-13",
  "type": "Remark",
  "number": "5.1.10",
  "title": "Evaluating Vector Field Line Integral.",
  "body": " Evaluating Vector Field Line Integral  Let be a smooth curve parametrized by , and be a (continuous) vector field over a region containing . Then the vector field line integral of over is evaluated as   "
},
{
  "id": "example-ch05-01-ex-23-3",
  "level": "2",
  "url": "sec-ch05-01-VectorFieldsAndLineIntegrals.html#example-ch05-01-ex-23-3",
  "type": "Example",
  "number": "5.1.11",
  "title": "",
  "body": "  Evaluate where on the following oriented curves in the plane:  (a) The quarter-circle from to (in black).  (b) The quarter-circle - from to .  (c) The path from to via two line segments through (in red).   On the background the part of the unit circle belonging on the first quadrant, the line segments starting from the origin to and ending to the 1 of the x and y axis respectively. On the foreground a vector field whose vectors create a clockwise swirl and their magnitude increases away from the origin.            b)   c)    "
},
{
  "id": "example-ch05-01-ex-23-4",
  "level": "2",
  "url": "sec-ch05-01-VectorFieldsAndLineIntegrals.html#example-ch05-01-ex-23-4",
  "type": "Example",
  "number": "5.1.12",
  "title": "",
  "body": "  Consider the vector field and the curves , and . Note that both curves start at and end at . Verify that .   On the background the part of the unit circle belonging on the first and second quadrant, and the line segment starting from (1,0) and ending at (-1,0). On the foreground a vector field whose vectors create a counter-clockwise swirl.                "
},
{
  "id": "sec-ch05-01-VectorFieldsAndLineIntegrals-16",
  "level": "2",
  "url": "sec-ch05-01-VectorFieldsAndLineIntegrals.html#sec-ch05-01-VectorFieldsAndLineIntegrals-16",
  "type": "Note",
  "number": "5.1.13",
  "title": "",
  "body": " Two things to note from and that are true in general:     Given a curve in the domain of a vector field ,     Given a vector field , two points in its domain, and two different curves and connecting and , in most cases,      In general, different curves connecting two points give different values for line integrals.        "
},
{
  "id": "sec-ch05-01-VectorFieldsAndLineIntegrals-17",
  "level": "2",
  "url": "sec-ch05-01-VectorFieldsAndLineIntegrals.html#sec-ch05-01-VectorFieldsAndLineIntegrals-17",
  "type": "Remark",
  "number": "5.1.14",
  "title": "Direction Interpretation.",
  "body": " Direction Interpretation  Given a vector field , a curve parametrized as , and a point ( ) on the curve, since can be positive or negative (depending on the angle between the vectors), the line integral can be positive or negative.  Hence, we can sometimes determine whether is positive or negative by looking at the angles between the vectors:     If for most of the curve, the angle between and satisfies , then we expect .    If for most of the curve, the angle between and satisfies , then we expect .    It is also possible for (for example, if for all points on .     "
},
{
  "id": "example-ch05-01-ex-23-5",
  "level": "2",
  "url": "sec-ch05-01-VectorFieldsAndLineIntegrals.html#example-ch05-01-ex-23-5",
  "type": "Example",
  "number": "5.1.15",
  "title": "",
  "body": "  Consider the vector field and curves plotted below. Use these plots to determine the sign of along each curve.   On the background a circle centred at the origin and traversed clockwise and in a different colour a line segment on the positive part of x -axis, traversed from left to right. On the foreground a vector field whose vectors create a clockwise swirl and their magnitude increases away from the origin.       Let be the circle as traversed above and be the line segment as traversed above. Notice that at any given point the tangent vector of will match the vectors of the field. Hence one can infer that . For notice that its tangent vector is perpendicular to the vectors of the field. Since the integral represents the integral of a dot product between the vector field and the tangent vector of the parametrization of the curve, given that those are perpendicular, one can infer that .   "
},
{
  "id": "sec-ch05-01-VectorFieldsAndLineIntegrals-19",
  "level": "2",
  "url": "sec-ch05-01-VectorFieldsAndLineIntegrals.html#sec-ch05-01-VectorFieldsAndLineIntegrals-19",
  "type": "Remark",
  "number": "5.1.16",
  "title": "",
  "body": " When a force (given by the vector field vectors) acts on an object\/particle moving along a curve (a particle\/curve system), we say the vector field is doing work on the system.  "
},
{
  "id": "sec-ch05-01-VectorFieldsAndLineIntegrals-20",
  "level": "2",
  "url": "sec-ch05-01-VectorFieldsAndLineIntegrals.html#sec-ch05-01-VectorFieldsAndLineIntegrals-20",
  "type": "Definition",
  "number": "5.1.17",
  "title": "Vector Field Line Integrals as Work.",
  "body": " Vector Field Line Integrals as Work   Let be a continuous force field and let be a smooth oriented curve in its domain. The work done by on the system given by a particle moving along is    "
},
{
  "id": "example-ch05-01-ex-23-6",
  "level": "2",
  "url": "sec-ch05-01-VectorFieldsAndLineIntegrals.html#example-ch05-01-ex-23-6",
  "type": "Example",
  "number": "5.1.18",
  "title": "",
  "body": "  Find the work done by the force field acting on the curve\/particle system given by .   On the foreground 3-dimensional vector field with vectors swirling about the x-axis, on the background the curve traced by the vector r of t with coordinates x = t squared, y = t cubed, z = t, for t from 0 to 1.           "
},
{
  "id": "sec-ch05-01-VectorFieldsAndLineIntegrals-22",
  "level": "2",
  "url": "sec-ch05-01-VectorFieldsAndLineIntegrals.html#sec-ch05-01-VectorFieldsAndLineIntegrals-22",
  "type": "Remark",
  "number": "5.1.19",
  "title": "Work Interpretation.",
  "body": " Work Interpretation  Under the work interpretation, it is important to understand what positive, negative, and zero work mean:     If , energy is being gained by the curve\/particle system (in the form of kinetic and potential energy).    If , energy is being lost by the curve\/particle system (in the form of heat, friction, etc.).    If , this does not mean the vector field forces didn't affect the system, more generally, the amount of energy gained was the same as the energy lost.     "
},
{
  "id": "sec-ch05-01-VectorFieldsAndLineIntegrals-23",
  "level": "2",
  "url": "sec-ch05-01-VectorFieldsAndLineIntegrals.html#sec-ch05-01-VectorFieldsAndLineIntegrals-23",
  "type": "Note",
  "number": "5.1.20",
  "title": "",
  "body": " Recall: A curve is:     Smooth: If it has no sharp edges\/corners.    Closed: If it is a loop (has no discernible starting\/ending point).    Simple: If it doesn't cross itself.     We call a curve that is simple, closed, and smooth, a SCS curve.  "
},
{
  "id": "sec-ch05-01-VectorFieldsAndLineIntegrals-24",
  "level": "2",
  "url": "sec-ch05-01-VectorFieldsAndLineIntegrals.html#sec-ch05-01-VectorFieldsAndLineIntegrals-24",
  "type": "Remark",
  "number": "5.1.21",
  "title": "",
  "body": " Suppose you have a 2-dimensional vector field and a SCS curve in its domain. We define the circulation of along as a measure of how much the vector field (vectors) points in the direction of (the unit tangent vectors of . That is, we define the circulation of along precisely as    A boat traversing on a closed simple curve, placed over a clockwise rotating current.     "
},
{
  "id": "sec-ch05-01-VectorFieldsAndLineIntegrals-25",
  "level": "2",
  "url": "sec-ch05-01-VectorFieldsAndLineIntegrals.html#sec-ch05-01-VectorFieldsAndLineIntegrals-25",
  "type": "Definition",
  "number": "5.1.22",
  "title": "Vector Field Line Integrals as Circulation.",
  "body": " Vector Field Line Integrals as Circulation   Let be a 2-dimensional continuous force field and let be a SCS curve in its domain. The circulation of along is computed as    "
},
{
  "id": "sec-ch05-01-VectorFieldsAndLineIntegrals-26",
  "level": "2",
  "url": "sec-ch05-01-VectorFieldsAndLineIntegrals.html#sec-ch05-01-VectorFieldsAndLineIntegrals-26",
  "type": "Remark",
  "number": "5.1.23",
  "title": "Circulation Interpretation.",
  "body": " Circulation Interpretation  If the path is not closed that we call this Flow . When we are talking about circulation along a boundary, the sign of the integral tells us the following:     If , most of the vector field is in the direction of . Hence, most particles (whose motion is represented by ) are moving along in the same orientation (as ).    If , most of the vector field is in the direction opposite of . Hence, most particles are moving along in the opposite orientation.    If , there is no discernible motion along .     "
},
{
  "id": "example-ch05-01-ex-23-7",
  "level": "2",
  "url": "sec-ch05-01-VectorFieldsAndLineIntegrals.html#example-ch05-01-ex-23-7",
  "type": "Example",
  "number": "5.1.24",
  "title": "",
  "body": "  Given the vector field and the curve parametrized by , , determine whether most of the vector field is in the direction of .   on the background the unit circle centred at the origin, on the foreground a vector field whose vectors point away from the line y equals x and towards the x-axis, with increasing magnitude away from the origin.           "
},
{
  "id": "sec-ch05-01-VectorFieldsAndLineIntegrals-28",
  "level": "2",
  "url": "sec-ch05-01-VectorFieldsAndLineIntegrals.html#sec-ch05-01-VectorFieldsAndLineIntegrals-28",
  "type": "Note",
  "number": "5.1.25",
  "title": "",
  "body": " Although we will mostly work with SCS curves when talking about circulation, we can generalize this idea to curves that are piece-wise smooth (a union of smooth curves connected at their endpoints).  We call a simple, closed, piece-wise smooth curve a SCPS curve.  "
},
{
  "id": "example-ch05-01-ex-23-8",
  "level": "2",
  "url": "sec-ch05-01-VectorFieldsAndLineIntegrals.html#example-ch05-01-ex-23-8",
  "type": "Example",
  "number": "5.1.26",
  "title": "",
  "body": "  Set up (but do not evaluate) a line integral (as a sum of integrals) that gives the circulation of the vector field along the SCPS curve , traversed counter-clockwise, shown below (First quadrant of the unit circle, and line segments on the respective axes).   On the background the part of the unit circle belonging on the first quadrant, the line segments starting from the origin to and ending to the 1 of the x and y axis respectively. On the foreground a vector field whose vectors are fixed on each vertical line. In each of those lines they point from left to right while at the same time their up-down direction is proportional to the x coordinate of the point they originate.           "
},
{
  "id": "sec-ch05-01-VectorFieldsAndLineIntegrals-30",
  "level": "2",
  "url": "sec-ch05-01-VectorFieldsAndLineIntegrals.html#sec-ch05-01-VectorFieldsAndLineIntegrals-30",
  "type": "Note",
  "number": "5.1.27",
  "title": "",
  "body": " In defining the circulation of a vector field along a closed curve , we were interested in the scalar component of the vector field in the direction of (measured using ), which is why we used .  "
},
{
  "id": "sec-ch05-01-VectorFieldsAndLineIntegrals-31",
  "level": "2",
  "url": "sec-ch05-01-VectorFieldsAndLineIntegrals.html#sec-ch05-01-VectorFieldsAndLineIntegrals-31",
  "type": "Remark",
  "number": "5.1.28",
  "title": "Flux of a Vector Field.",
  "body": " Flux of a Vector Field  For flux, instead of wanting to measure how much of the vector field is in the direction of , we instead want to measure how much of the vector field is normal\/perpendicular\/orthogonal to . Hence, instead of using the scalar component of in the direction of a unit tangent vector , we will use the scalar component of in the direction of (a unit vector normal to ). Hence, we will define the flux of on across as    On the background a vector field, on the foreground a simple closed smooth curve, traversed counter-clockwise, and vectors placed on it, on a direction perpendicular to its tangent vector.     "
},
{
  "id": "sec-ch05-01-VectorFieldsAndLineIntegrals-32",
  "level": "2",
  "url": "sec-ch05-01-VectorFieldsAndLineIntegrals.html#sec-ch05-01-VectorFieldsAndLineIntegrals-32",
  "type": "Definition",
  "number": "5.1.29",
  "title": "Vector Field Line Integrals as Flux.",
  "body": " Vector Field Line Integrals as Flux   Let be a 2 -dimensional continuous vector field and let be a SCPS oriented curve in its domain parametrized by and oriented counter clockwise. Let , a normal vector that points to the right of the direction that the curve is parametrized with, and the unit normal vector in its direction. The flux of across is computed as    "
},
{
  "id": "sec-ch05-01-VectorFieldsAndLineIntegrals-33",
  "level": "2",
  "url": "sec-ch05-01-VectorFieldsAndLineIntegrals.html#sec-ch05-01-VectorFieldsAndLineIntegrals-33",
  "type": "Remark",
  "number": "5.1.30",
  "title": "",
  "body": " When we are talking about flux across a boundary, the sign of the integral tells us the following:     If , most of the vector field points away from . Hence, most particles (whose motion is represented by ) are moving from inside towards the outside.    If , most of the vector field points towards (the inside of) . Hence, most particles are moving from outside towards the inside.    If , the same amount of particles (could be none) are entering and exiting the region .     "
},
{
  "id": "example-ch05-01-ex-23-9",
  "level": "2",
  "url": "sec-ch05-01-VectorFieldsAndLineIntegrals.html#example-ch05-01-ex-23-9",
  "type": "Example",
  "number": "5.1.31",
  "title": "",
  "body": "  Determine whether most particles, whose motion is represented by , are entering or exiting across the ellipse , .        "
},
{
  "id": "example-ch05-01-ex-23-10",
  "level": "2",
  "url": "sec-ch05-01-VectorFieldsAndLineIntegrals.html#example-ch05-01-ex-23-10",
  "type": "Example",
  "number": "5.1.32",
  "title": "",
  "body": "  Determine whether most particles, whose motion is represented by , are entering or exiting across the ellipse , .        "
},
{
  "id": "sec-ch05-01-VectorFieldsAndLineIntegrals-36",
  "level": "2",
  "url": "sec-ch05-01-VectorFieldsAndLineIntegrals.html#sec-ch05-01-VectorFieldsAndLineIntegrals-36",
  "type": "Remark",
  "number": "5.1.33",
  "title": "Summary of Interpretations.",
  "body": " Summary of Interpretations  For the line integral :     Directional interpretation.     If for most of the curve, the angle between and satisfies , then we expect .    If for most of the curve, the angle between and satisfies , then we expect .    It is also possible for (for example, if for all points on ).       Work interpretation.     If , energy is being gained by the curve\/particle system (in the form of kinetic and potential energy).    If , energy is being lost by the curve\/particle system (in the form of heat, friction, etc.).    If , this does not mean the vector field forces didn't affect the system, more generally, the amount of energy gained was the same as the energy lost.       Circulation Interpretation (if is simple, closed, piece-wise smooth):     If , most of the vector field is in the direction of . Hence, most particles (whose motion is represented by ) are moving along in the same orientation (as ).    If , most of the vector field is in the direction opposite of . Hence, most particles are moving along in the opposite orientation.    If , there is no discernible motion along .        For the integral , when is a simple, closed, piece-wise smooth curve enclosing a region , oriented counter-clockwise:     Flux interpretation :     If , most of the vector field points away from . Hence, most particles (whose motion is represented by ) are moving from inside towards the outside.    If , most of the vector field points towards (the inside of) . Hence, most particles are moving from outside towards the inside.    If , the same amount of particles (could be none) are entering and exiting the region .        "
},
{
  "id": "sec-ch05-02-FundamentalTheoremOfLineIntegrals",
  "level": "1",
  "url": "sec-ch05-02-FundamentalTheoremOfLineIntegrals.html",
  "type": "Section",
  "number": "5.2",
  "title": "Fundamental Theorem of Line Integrals",
  "body": " Fundamental Theorem of Line Integrals   Conservative Vector Fields  As we discussed, given a vector field , two points and in its domain ( could be equal to ), and two different curves and connecting to , in most cases,      In general, different curves connecting two points give different values for line integrals.     However, there is a way we can guarantee that for any path with starting point and ending point , then always has the same value independent of which path you take. We do this by working with conservative vector fields.    Conservative Vector Fields   A vector field is said to be conservative if there exists a scalar valued function , with continuous partial derivatives, such that   Equivalently, if .  We call such a function a potential function for .      Verify that is a potential function for (so that is conservative).          In general, finding a function such that is hard, hence, we developed an easier test to determine whether a vector field is conservative.   From now on, we will assume the regions we discuss are open (don't contain their boundary).     Test for Conservative Vector Fields  Let be a vector field defined on a connected and simply connected region , and suppose that , and have continuous partial derivatives on . Then is conservative on if and only if .  If , then you only have to check the condition .   This is an example of how a connected and simply connected region looks\/does not look like:   From openstax vol 3   On the first row there are three simply connected regions: the region enclosed by a trapezoid, the region enclosed by a simple closed smooth curve and the region enclosed by a hexagon. On the second row there are three connected but not simply connected regions: the region enclosed by a trapezoid but excluding the region of a disk inside, the region enclosed by a simple closed smooth curve but excluding the region of a disk inside, and the region enclosed by a hexagon but excluding the region of a disk as well as another circular region from its interior. On the third row there is a region that is not connected, consisting of the regions enclosed by two non-intersecting simple closed smooth curves.   On the first row there are three simply connected regions: the region enclosed by a trapezoid, the region enclosed by a simple closed smooth curve and the region enclosed by a hexagon. On the second row there are three connected but not simply connected regions: the region enclosed by a trapezoid but excluding the region of a disk inside, the region enclosed by a simple closed smooth curve but excluding the region of a disk inside, and the region enclosed by a hexagon but excluding the region of a disk as well as another circular region from its interior. On the third row there is a region that is not connected, consisting of the regions enclosed by two non-intersecting simple closed smooth curves.       Determine whether the following vector fields are conservative over their domain:  All the components of the vector fields below are polynomials defined on the entire -plane. Hence we can apply the aforementioned test.  (a)   (b) .               Once we know a vector field is conservative, now we can put in the effort to find a potential function for it.     Find a potential function for the conservative vector field .    A potential function would satisfy and that would imply that and . Now: Notice that the terms of the above polynomials that depend on both and are equal, as one would expect since their corresponding partials would appear in both and . This allows for (the non-common part of the polynomials that depends only on ) and (the non-common part of the polynomials that depends only on ). Hence       Find a potential function for the conservative vector field .    A potential function would satisfy and that would imply that and . Now: Notice that the terms of the above polynomials that depend on both and are equal, as one would expect since their corresponding partials would appear in both and . This allows for (the non-common part of the polynomials that depends only on ) and (the non-common part of the polynomials that depends only on ). Hence      Conservative Vector Fields and Path Independence  A vector field , defined over an open connected region, is path independent if and only if it is conservative.    (left) and (right)    On the background a vector field, on the foreground the straight line connecting the points (0,0) and (1,1)      On the background a vector field, on the foreground a parabolic line connecting the points (0,0) and (1,1)       The graphs above show only the plots; you can drag and zoom them. To see the expressions behind them, or to save a copy and create your own version of the graphs, open them in a new page from here: link to the left graph , link to the right graph     Consider the vector field and the two paths shown above connecting the points and .  (a) Determine whether is conservative.  (b) Evaluate the vector line integral over the first path.  (c) Use your answer for part (b) and path independence to evaluate the line integral over the second path    All the components of the vector field are polynomials defined on the entire -plane. Hence one can apply the aforementioned test.          From the fact that is conservative we have path independence and hence the answer is the same as part (b) .      Fundamental Theorem of Line Integrals   Suppose that is conservative over an open, connected, simply connected region and that the function satisfies . Then , where is any (piece-wise) smooth path from the point to the point .      Verify that the function satisfies , where . Use the fundamental theorem of line integrals to evaluate the vector line integral over the path shown below.   On the background a vector field, on the foreground the straight line connecting the points (0,0) and (1,1)                The Fundamental Theorem of Line Integrals tells us what happens when we integrate a conservative vector field over a simple and closed curve.    Loop Property  Let be an open and connected region. Then is conservative on if and only if for all simple, closed, and piecewise smooth curves in .     Explain why the loop property holds if you start with a conservative vector field and a SCPS curve .    Assume that a SCPS curve has smooth pieces, from point to point , from to , , and from all the way back to and assume that . Then      We use the integral symbol to emphasize we are integrating over a simple and closed curve.     Evaluate where and is the unit circle (with a given orientation).    The unit circle is a SCPS curve. Notice that is conservative since is a potential function for it. One can also notice that all the components of the vector field are polynomials defined on the entire -plane. Hence one can apply the test which yields the same conclusion. By the fundamental theorem of line integrals and the loop property      The test given for conservative vector fields only works over connected and simply connected regions.     You can verify that satisfies , however, the vector line integral of over , is instead of zero. Why is this the case?    Indeed The issue here is that the test was applied improperly. The domain of those functions is not simply connected. They are not defined at , thus the domain has a hole and it is not simply connected. Moreover, this hole is enclosed by the curve of the vector line integral.  Another way to arrive at that conclusion is to try to find a function for which . At first glance that function should be . But this function, and by extension its partials, is not defined on the -axis ( ). Hence is not equal to , since the latter is defined at all points of the -axis apart from the origin .    "
},
{
  "id": "sec-ch05-02-FundamentalTheoremOfLineIntegrals-2",
  "level": "2",
  "url": "sec-ch05-02-FundamentalTheoremOfLineIntegrals.html#sec-ch05-02-FundamentalTheoremOfLineIntegrals-2",
  "type": "Note",
  "number": "5.2.1",
  "title": "Conservative Vector Fields.",
  "body": " Conservative Vector Fields  As we discussed, given a vector field , two points and in its domain ( could be equal to ), and two different curves and connecting to , in most cases,      In general, different curves connecting two points give different values for line integrals.     However, there is a way we can guarantee that for any path with starting point and ending point , then always has the same value independent of which path you take. We do this by working with conservative vector fields.  "
},
{
  "id": "sec-ch05-02-FundamentalTheoremOfLineIntegrals-3",
  "level": "2",
  "url": "sec-ch05-02-FundamentalTheoremOfLineIntegrals.html#sec-ch05-02-FundamentalTheoremOfLineIntegrals-3",
  "type": "Definition",
  "number": "5.2.2",
  "title": "Conservative Vector Fields.",
  "body": " Conservative Vector Fields   A vector field is said to be conservative if there exists a scalar valued function , with continuous partial derivatives, such that   Equivalently, if .  We call such a function a potential function for .   "
},
{
  "id": "example-ch05-02-ex-24-1",
  "level": "2",
  "url": "sec-ch05-02-FundamentalTheoremOfLineIntegrals.html#example-ch05-02-ex-24-1",
  "type": "Example",
  "number": "5.2.3",
  "title": "",
  "body": "  Verify that is a potential function for (so that is conservative).        "
},
{
  "id": "sec-ch05-02-FundamentalTheoremOfLineIntegrals-5",
  "level": "2",
  "url": "sec-ch05-02-FundamentalTheoremOfLineIntegrals.html#sec-ch05-02-FundamentalTheoremOfLineIntegrals-5",
  "type": "Note",
  "number": "5.2.4",
  "title": "",
  "body": " In general, finding a function such that is hard, hence, we developed an easier test to determine whether a vector field is conservative.   From now on, we will assume the regions we discuss are open (don't contain their boundary).   "
},
{
  "id": "sec-ch05-02-FundamentalTheoremOfLineIntegrals-6",
  "level": "2",
  "url": "sec-ch05-02-FundamentalTheoremOfLineIntegrals.html#sec-ch05-02-FundamentalTheoremOfLineIntegrals-6",
  "type": "Remark",
  "number": "5.2.5",
  "title": "Test for Conservative Vector Fields.",
  "body": " Test for Conservative Vector Fields  Let be a vector field defined on a connected and simply connected region , and suppose that , and have continuous partial derivatives on . Then is conservative on if and only if .  If , then you only have to check the condition .  "
},
{
  "id": "fig-ch05-02-connected-regions",
  "level": "2",
  "url": "sec-ch05-02-FundamentalTheoremOfLineIntegrals.html#fig-ch05-02-connected-regions",
  "type": "Figure",
  "number": "5.2.1",
  "title": "",
  "body": " From openstax vol 3   On the first row there are three simply connected regions: the region enclosed by a trapezoid, the region enclosed by a simple closed smooth curve and the region enclosed by a hexagon. On the second row there are three connected but not simply connected regions: the region enclosed by a trapezoid but excluding the region of a disk inside, the region enclosed by a simple closed smooth curve but excluding the region of a disk inside, and the region enclosed by a hexagon but excluding the region of a disk as well as another circular region from its interior. On the third row there is a region that is not connected, consisting of the regions enclosed by two non-intersecting simple closed smooth curves.   On the first row there are three simply connected regions: the region enclosed by a trapezoid, the region enclosed by a simple closed smooth curve and the region enclosed by a hexagon. On the second row there are three connected but not simply connected regions: the region enclosed by a trapezoid but excluding the region of a disk inside, the region enclosed by a simple closed smooth curve but excluding the region of a disk inside, and the region enclosed by a hexagon but excluding the region of a disk as well as another circular region from its interior. On the third row there is a region that is not connected, consisting of the regions enclosed by two non-intersecting simple closed smooth curves.    "
},
{
  "id": "example-ch05-02-ex-24-2",
  "level": "2",
  "url": "sec-ch05-02-FundamentalTheoremOfLineIntegrals.html#example-ch05-02-ex-24-2",
  "type": "Example",
  "number": "5.2.6",
  "title": "",
  "body": "  Determine whether the following vector fields are conservative over their domain:  All the components of the vector fields below are polynomials defined on the entire -plane. Hence we can apply the aforementioned test.  (a)   (b) .             "
},
{
  "id": "sec-ch05-02-FundamentalTheoremOfLineIntegrals-10",
  "level": "2",
  "url": "sec-ch05-02-FundamentalTheoremOfLineIntegrals.html#sec-ch05-02-FundamentalTheoremOfLineIntegrals-10",
  "type": "Note",
  "number": "5.2.7",
  "title": "",
  "body": " Once we know a vector field is conservative, now we can put in the effort to find a potential function for it.  "
},
{
  "id": "example-ch05-02-ex-24-3",
  "level": "2",
  "url": "sec-ch05-02-FundamentalTheoremOfLineIntegrals.html#example-ch05-02-ex-24-3",
  "type": "Example",
  "number": "5.2.8",
  "title": "",
  "body": "  Find a potential function for the conservative vector field .    A potential function would satisfy and that would imply that and . Now: Notice that the terms of the above polynomials that depend on both and are equal, as one would expect since their corresponding partials would appear in both and . This allows for (the non-common part of the polynomials that depends only on ) and (the non-common part of the polynomials that depends only on ). Hence    "
},
{
  "id": "example-ch05-02-ex-24-4",
  "level": "2",
  "url": "sec-ch05-02-FundamentalTheoremOfLineIntegrals.html#example-ch05-02-ex-24-4",
  "type": "Example",
  "number": "5.2.9",
  "title": "",
  "body": "  Find a potential function for the conservative vector field .    A potential function would satisfy and that would imply that and . Now: Notice that the terms of the above polynomials that depend on both and are equal, as one would expect since their corresponding partials would appear in both and . This allows for (the non-common part of the polynomials that depends only on ) and (the non-common part of the polynomials that depends only on ). Hence    "
},
{
  "id": "sec-ch05-02-FundamentalTheoremOfLineIntegrals-13",
  "level": "2",
  "url": "sec-ch05-02-FundamentalTheoremOfLineIntegrals.html#sec-ch05-02-FundamentalTheoremOfLineIntegrals-13",
  "type": "Remark",
  "number": "5.2.10",
  "title": "Conservative Vector Fields and Path Independence.",
  "body": " Conservative Vector Fields and Path Independence  A vector field , defined over an open connected region, is path independent if and only if it is conservative.  "
},
{
  "id": "fig-ch05-02-two-paths",
  "level": "2",
  "url": "sec-ch05-02-FundamentalTheoremOfLineIntegrals.html#fig-ch05-02-two-paths",
  "type": "Figure",
  "number": "5.2.2",
  "title": "",
  "body": " (left) and (right)    On the background a vector field, on the foreground the straight line connecting the points (0,0) and (1,1)      On the background a vector field, on the foreground a parabolic line connecting the points (0,0) and (1,1)      "
},
{
  "id": "example-ch05-02-ex-24-5",
  "level": "2",
  "url": "sec-ch05-02-FundamentalTheoremOfLineIntegrals.html#example-ch05-02-ex-24-5",
  "type": "Example",
  "number": "5.2.11",
  "title": "",
  "body": "  Consider the vector field and the two paths shown above connecting the points and .  (a) Determine whether is conservative.  (b) Evaluate the vector line integral over the first path.  (c) Use your answer for part (b) and path independence to evaluate the line integral over the second path    All the components of the vector field are polynomials defined on the entire -plane. Hence one can apply the aforementioned test.          From the fact that is conservative we have path independence and hence the answer is the same as part (b) .   "
},
{
  "id": "sec-ch05-02-FundamentalTheoremOfLineIntegrals-17",
  "level": "2",
  "url": "sec-ch05-02-FundamentalTheoremOfLineIntegrals.html#sec-ch05-02-FundamentalTheoremOfLineIntegrals-17",
  "type": "Theorem",
  "number": "5.2.12",
  "title": "Fundamental Theorem of Line Integrals.",
  "body": " Fundamental Theorem of Line Integrals   Suppose that is conservative over an open, connected, simply connected region and that the function satisfies . Then , where is any (piece-wise) smooth path from the point to the point .   "
},
{
  "id": "example-ch05-02-ex-24-6",
  "level": "2",
  "url": "sec-ch05-02-FundamentalTheoremOfLineIntegrals.html#example-ch05-02-ex-24-6",
  "type": "Example",
  "number": "5.2.13",
  "title": "",
  "body": "  Verify that the function satisfies , where . Use the fundamental theorem of line integrals to evaluate the vector line integral over the path shown below.   On the background a vector field, on the foreground the straight line connecting the points (0,0) and (1,1)              "
},
{
  "id": "sec-ch05-02-FundamentalTheoremOfLineIntegrals-19",
  "level": "2",
  "url": "sec-ch05-02-FundamentalTheoremOfLineIntegrals.html#sec-ch05-02-FundamentalTheoremOfLineIntegrals-19",
  "type": "Note",
  "number": "5.2.14",
  "title": "",
  "body": " The Fundamental Theorem of Line Integrals tells us what happens when we integrate a conservative vector field over a simple and closed curve.  "
},
{
  "id": "sec-ch05-02-FundamentalTheoremOfLineIntegrals-20",
  "level": "2",
  "url": "sec-ch05-02-FundamentalTheoremOfLineIntegrals.html#sec-ch05-02-FundamentalTheoremOfLineIntegrals-20",
  "type": "Remark",
  "number": "5.2.15",
  "title": "Loop Property.",
  "body": " Loop Property  Let be an open and connected region. Then is conservative on if and only if for all simple, closed, and piecewise smooth curves in .  "
},
{
  "id": "example-ch05-02-ex-24-7",
  "level": "2",
  "url": "sec-ch05-02-FundamentalTheoremOfLineIntegrals.html#example-ch05-02-ex-24-7",
  "type": "Example",
  "number": "5.2.16",
  "title": "",
  "body": "  Explain why the loop property holds if you start with a conservative vector field and a SCPS curve .    Assume that a SCPS curve has smooth pieces, from point to point , from to , , and from all the way back to and assume that . Then    "
},
{
  "id": "sec-ch05-02-FundamentalTheoremOfLineIntegrals-22",
  "level": "2",
  "url": "sec-ch05-02-FundamentalTheoremOfLineIntegrals.html#sec-ch05-02-FundamentalTheoremOfLineIntegrals-22",
  "type": "Remark",
  "number": "5.2.17",
  "title": "",
  "body": " We use the integral symbol to emphasize we are integrating over a simple and closed curve.  "
},
{
  "id": "example-ch05-02-ex-24-8",
  "level": "2",
  "url": "sec-ch05-02-FundamentalTheoremOfLineIntegrals.html#example-ch05-02-ex-24-8",
  "type": "Example",
  "number": "5.2.18",
  "title": "",
  "body": "  Evaluate where and is the unit circle (with a given orientation).    The unit circle is a SCPS curve. Notice that is conservative since is a potential function for it. One can also notice that all the components of the vector field are polynomials defined on the entire -plane. Hence one can apply the test which yields the same conclusion. By the fundamental theorem of line integrals and the loop property    "
},
{
  "id": "sec-ch05-02-FundamentalTheoremOfLineIntegrals-24",
  "level": "2",
  "url": "sec-ch05-02-FundamentalTheoremOfLineIntegrals.html#sec-ch05-02-FundamentalTheoremOfLineIntegrals-24",
  "type": "Remark",
  "number": "5.2.19",
  "title": "",
  "body": " The test given for conservative vector fields only works over connected and simply connected regions.  "
},
{
  "id": "example-ch05-02-ex-24-9",
  "level": "2",
  "url": "sec-ch05-02-FundamentalTheoremOfLineIntegrals.html#example-ch05-02-ex-24-9",
  "type": "Example",
  "number": "5.2.20",
  "title": "",
  "body": "  You can verify that satisfies , however, the vector line integral of over , is instead of zero. Why is this the case?    Indeed The issue here is that the test was applied improperly. The domain of those functions is not simply connected. They are not defined at , thus the domain has a hole and it is not simply connected. Moreover, this hole is enclosed by the curve of the vector line integral.  Another way to arrive at that conclusion is to try to find a function for which . At first glance that function should be . But this function, and by extension its partials, is not defined on the -axis ( ). Hence is not equal to , since the latter is defined at all points of the -axis apart from the origin .   "
},
{
  "id": "sec-ch05-03-GreensTheoremCurl",
  "level": "1",
  "url": "sec-ch05-03-GreensTheoremCurl.html",
  "type": "Section",
  "number": "5.3",
  "title": "Green’s Theorem: 2D Curl",
  "body": " Green's Theorem: 2D Curl   Suppose you have a SCPS curve representing a boundary inside some liquid whose particles' motion is given by a vector field . Intuitively, it makes sense that how the liquid particles behave near the boundary is influenced by what the particles are doing elsewhere in the region bounded by . For example, if everywhere you look inside the region , particles are rotating counter-clockwise, it makes sense that this is what is happening around the boundary, as shown below:    A simple closed smooth curve, traversed counter-clockwise, enclosing multiple small counter-clockwise vortices.     We quantify the rotational motion of particles at a point using curl.   2D Curl   Let be a differentiable vector field representing the motion of particles. We measure the rotational motion at a point by using .     When we say at a point , we really mean inside an infinitely small circle centered at .    The sign of curl  The sign of curl tells us the orientation of the rotation:     If curl has counter-clockwise rotational motion around it.    If curl has clockwise rotational motion around it.    If curl , there is no discernible rotational motion around and we say is irrotational.        Given the vector field :  (a) Compute curl .  (b) Find a point with counter-clockwise motion around it and one with clockwise motion.  (c) Find all points that are irrotational.         Counter-clockwise motion implies positive curl, while clockwise motion implies negative curl.     Irrotational implies zero curl. All points of the form .    This relationship between rotation inside a region and its boundary is quantified mathematically by Green's Theorem.   Green's Theorem: Curl   Let be a SCPS curve, oriented counter-clockwise, that encloses a connected and simply connected region in the plane. Assume that , where and have continuous first partial derivatives in . Then .     Given and , the following are equivalent:        Since we are dealing with curl, we assume that is simple and closed (so that it encloses a region ).    Important: This theorem says that in order to compute the curl along a SCPS boundary, you add up the curl at each point inside the enclosed region .    The proof of this result is simple and is given in the book.        Using Green's theorem, compute the work represented by , where is the unit circle (oriented counter-clockwise).    From previous material . According to the above This implies that in this case the vector field is whose . Additionally, from the theorem . Notice that both region that of integration as well as the function behave better in polar coordinates. In this coordinate system the region is expressed as and , while . Hence      Green's theorem can greatly simplify computations.     Compute the circulation of a fluid whose velocity field is given by , along the boundary given by the rectangle (oriented counter-clockwise) with vertices at , and .   A rectangle in the plane with vertices (2,-2), (3,-2), (3,2) and (2,2), shaded as the region of integration.       Circulation . Using the previous theorem, the integral can be expressed as . For the vector field one has and . The of this vector field equals . Now      Green's Theorem and Area  Suppose that we want to compute the curl of the vector field along some SCPS boundary. We have that     Line Integrals for Area  To find the area of a region enclosed by a SCPS curve , compute the line integral over of or .     Find a formula for the area of the ellipse     By utilizing the vector field one can calculate the line integral of this vector field over a parametrization of the ellipse. One such parametrization is for . Now      If a vector field is conservative on an open, connected, simply connected region , then for every point in (hence is irrotational in ). Conversely, if is irrotational in , its curl along the boundary of is zero (by Green's theorem). Hence, we have the following equivalence.    Conservative and Irrotational Fields  Let be an open, connected, simply connected region. Then is conservative on if and only if it is irrotational in .   "
},
{
  "id": "sec-ch05-03-GreensTheoremCurl-2",
  "level": "2",
  "url": "sec-ch05-03-GreensTheoremCurl.html#sec-ch05-03-GreensTheoremCurl-2",
  "type": "Note",
  "number": "5.3.1",
  "title": "",
  "body": " Suppose you have a SCPS curve representing a boundary inside some liquid whose particles' motion is given by a vector field . Intuitively, it makes sense that how the liquid particles behave near the boundary is influenced by what the particles are doing elsewhere in the region bounded by . For example, if everywhere you look inside the region , particles are rotating counter-clockwise, it makes sense that this is what is happening around the boundary, as shown below:  "
},
{
  "id": "fig-ch05-03-vortices",
  "level": "2",
  "url": "sec-ch05-03-GreensTheoremCurl.html#fig-ch05-03-vortices",
  "type": "Figure",
  "number": "5.3.1",
  "title": "",
  "body": " A simple closed smooth curve, traversed counter-clockwise, enclosing multiple small counter-clockwise vortices.    "
},
{
  "id": "sec-ch05-03-GreensTheoremCurl-5",
  "level": "2",
  "url": "sec-ch05-03-GreensTheoremCurl.html#sec-ch05-03-GreensTheoremCurl-5",
  "type": "Definition",
  "number": "5.3.2",
  "title": "2D Curl.",
  "body": " 2D Curl   Let be a differentiable vector field representing the motion of particles. We measure the rotational motion at a point by using .   "
},
{
  "id": "sec-ch05-03-GreensTheoremCurl-6",
  "level": "2",
  "url": "sec-ch05-03-GreensTheoremCurl.html#sec-ch05-03-GreensTheoremCurl-6",
  "type": "Note",
  "number": "5.3.3",
  "title": "",
  "body": " When we say at a point , we really mean inside an infinitely small circle centered at .  "
},
{
  "id": "sec-ch05-03-GreensTheoremCurl-7",
  "level": "2",
  "url": "sec-ch05-03-GreensTheoremCurl.html#sec-ch05-03-GreensTheoremCurl-7",
  "type": "Remark",
  "number": "5.3.4",
  "title": "The sign of curl <span class=\"process-math\">\\(\\vec{F}(a, b)\\)<\/span>.",
  "body": " The sign of curl  The sign of curl tells us the orientation of the rotation:     If curl has counter-clockwise rotational motion around it.    If curl has clockwise rotational motion around it.    If curl , there is no discernible rotational motion around and we say is irrotational.     "
},
{
  "id": "example-ch05-03-ex-25-1",
  "level": "2",
  "url": "sec-ch05-03-GreensTheoremCurl.html#example-ch05-03-ex-25-1",
  "type": "Example",
  "number": "5.3.5",
  "title": "",
  "body": "  Given the vector field :  (a) Compute curl .  (b) Find a point with counter-clockwise motion around it and one with clockwise motion.  (c) Find all points that are irrotational.         Counter-clockwise motion implies positive curl, while clockwise motion implies negative curl.     Irrotational implies zero curl. All points of the form .   "
},
{
  "id": "sec-ch05-03-GreensTheoremCurl-10",
  "level": "2",
  "url": "sec-ch05-03-GreensTheoremCurl.html#sec-ch05-03-GreensTheoremCurl-10",
  "type": "Theorem",
  "number": "5.3.6",
  "title": "Green’s Theorem: Curl.",
  "body": " Green's Theorem: Curl   Let be a SCPS curve, oriented counter-clockwise, that encloses a connected and simply connected region in the plane. Assume that , where and have continuous first partial derivatives in . Then .   "
},
{
  "id": "sec-ch05-03-GreensTheoremCurl-11",
  "level": "2",
  "url": "sec-ch05-03-GreensTheoremCurl.html#sec-ch05-03-GreensTheoremCurl-11",
  "type": "Remark",
  "number": "5.3.7",
  "title": "",
  "body": " Given and , the following are equivalent:   "
},
{
  "id": "sec-ch05-03-GreensTheoremCurl-12",
  "level": "2",
  "url": "sec-ch05-03-GreensTheoremCurl.html#sec-ch05-03-GreensTheoremCurl-12",
  "type": "Note",
  "number": "5.3.8",
  "title": "",
  "body": "    Since we are dealing with curl, we assume that is simple and closed (so that it encloses a region ).    Important: This theorem says that in order to compute the curl along a SCPS boundary, you add up the curl at each point inside the enclosed region .    The proof of this result is simple and is given in the book.     "
},
{
  "id": "example-ch05-03-ex-25-2",
  "level": "2",
  "url": "sec-ch05-03-GreensTheoremCurl.html#example-ch05-03-ex-25-2",
  "type": "Example",
  "number": "5.3.9",
  "title": "",
  "body": "  Using Green's theorem, compute the work represented by , where is the unit circle (oriented counter-clockwise).    From previous material . According to the above This implies that in this case the vector field is whose . Additionally, from the theorem . Notice that both region that of integration as well as the function behave better in polar coordinates. In this coordinate system the region is expressed as and , while . Hence    "
},
{
  "id": "sec-ch05-03-GreensTheoremCurl-14",
  "level": "2",
  "url": "sec-ch05-03-GreensTheoremCurl.html#sec-ch05-03-GreensTheoremCurl-14",
  "type": "Remark",
  "number": "5.3.10",
  "title": "",
  "body": " Green's theorem can greatly simplify computations.  "
},
{
  "id": "example-ch05-03-ex-25-3",
  "level": "2",
  "url": "sec-ch05-03-GreensTheoremCurl.html#example-ch05-03-ex-25-3",
  "type": "Example",
  "number": "5.3.11",
  "title": "",
  "body": "  Compute the circulation of a fluid whose velocity field is given by , along the boundary given by the rectangle (oriented counter-clockwise) with vertices at , and .   A rectangle in the plane with vertices (2,-2), (3,-2), (3,2) and (2,2), shaded as the region of integration.       Circulation . Using the previous theorem, the integral can be expressed as . For the vector field one has and . The of this vector field equals . Now    "
},
{
  "id": "sec-ch05-03-GreensTheoremCurl-16",
  "level": "2",
  "url": "sec-ch05-03-GreensTheoremCurl.html#sec-ch05-03-GreensTheoremCurl-16",
  "type": "Note",
  "number": "5.3.12",
  "title": "Green’s Theorem and Area.",
  "body": " Green's Theorem and Area  Suppose that we want to compute the curl of the vector field along some SCPS boundary. We have that   "
},
{
  "id": "sec-ch05-03-GreensTheoremCurl-17",
  "level": "2",
  "url": "sec-ch05-03-GreensTheoremCurl.html#sec-ch05-03-GreensTheoremCurl-17",
  "type": "Remark",
  "number": "5.3.13",
  "title": "Line Integrals for Area.",
  "body": " Line Integrals for Area  To find the area of a region enclosed by a SCPS curve , compute the line integral over of or .  "
},
{
  "id": "example-ch05-03-ex-25-4",
  "level": "2",
  "url": "sec-ch05-03-GreensTheoremCurl.html#example-ch05-03-ex-25-4",
  "type": "Example",
  "number": "5.3.14",
  "title": "",
  "body": "  Find a formula for the area of the ellipse     By utilizing the vector field one can calculate the line integral of this vector field over a parametrization of the ellipse. One such parametrization is for . Now    "
},
{
  "id": "sec-ch05-03-GreensTheoremCurl-19",
  "level": "2",
  "url": "sec-ch05-03-GreensTheoremCurl.html#sec-ch05-03-GreensTheoremCurl-19",
  "type": "Note",
  "number": "5.3.15",
  "title": "",
  "body": " If a vector field is conservative on an open, connected, simply connected region , then for every point in (hence is irrotational in ). Conversely, if is irrotational in , its curl along the boundary of is zero (by Green's theorem). Hence, we have the following equivalence.  "
},
{
  "id": "sec-ch05-03-GreensTheoremCurl-20",
  "level": "2",
  "url": "sec-ch05-03-GreensTheoremCurl.html#sec-ch05-03-GreensTheoremCurl-20",
  "type": "Remark",
  "number": "5.3.16",
  "title": "Conservative and Irrotational Fields.",
  "body": " Conservative and Irrotational Fields  Let be an open, connected, simply connected region. Then is conservative on if and only if it is irrotational in .  "
},
{
  "id": "sec-ch05-04-GreensTheoremDivergence",
  "level": "1",
  "url": "sec-ch05-04-GreensTheoremDivergence.html",
  "type": "Section",
  "number": "5.4",
  "title": "Green’s Theorem: 2D Divergence",
  "body": " Green's Theorem: 2D Divergence   Suppose you have a SCPS curve representing a boundary enclosing a region inside some liquid whose particles motion is given by a vector field F. As before, it makes sense that the behaviour of the liquid particles in determines the behaviour of the particles near the boundary. For example, if for all (most) points in , particles near them are moving outwards (away from the point), it makes sense that the same is happening near the boundary (particles are moving outwards across the boundary ), as shown below:    A simple closed smooth curve, traversed counter-clockwise, with vectors placed on it, pointing outwards perpendicular to its tangent vector. The curve is enclosing multiple points from which vectors points away from in all cardinal directions.     We quantify the expansion (outwards\/repelling motion) of particles at a point using divergence.   2D Divergence   Let be a differentiable vector field representing the motion of particles. We measure the outwards\/repelling motion at a point ( ) by using .     When we say at a point , we really mean inside an infinitely small circle centered at .    The sign of  The sign of tells us whether particles are expanding or contracting at a point:     If is acting as a repellent (particles are moving away from ).    If is acting as an attractor (particles are moving towards ).    If , there is no discernible repellent\/attractor motion around and we say is not a source.        Given the vector field :  (a) Compute Div F.  (b) Find a point that acts as an attractor and a point that acts as a repellent.  (c) Find a point that is not a source.         Attractor implies and repellent      Not a source implies zero Div.     This relationship between expansion inside a region and its boundary is quantified mathematically by Green's Theorem.   Green's Theorem: Divergence   Let be a SCPS curve, oriented counterclockwise, that encloses a connected and simply connected region in the plane. Assume that , where and have continuous first partial derivatives in . Then      Given and , the following are equivalent:        Since we are dealing with curl, we assume that is simple and closed (so that it encloses a region ).    Important: This theorem says that in order to compute the divergence across a SCPS boundary, you add up the divergence at each point inside the enclosed region .    The proof of this result is simple and is given in the book.        Using Green's theorem, compute the integral that represent the flux , where is the unit circle (oriented counter-clockwise).    From previous material . According to the above This implies that in this case the vector field is whose . Additionally, from the theorem . Notice that both region that of integration as well as the function behave well in polar coordinates. In this coordinate system the region is expressed as and , while . Hence       Compute the flux of a fluid whose velocity field is given by , across the boundary of the region in the first quadrant bounded by the circles , the line , and the -axis (oriented counter-clockwise).   A region in the first quadrant bounded below by the x-axis and above by the line y equals x, lying between the circular arcs of radius 1 and radius 2.       Flux . Using the previous theorem, the integral can be expressed as . For the vector field one has and . The of this vector field equals . Now in order to use Polar Coordinates one must rewrite the and the equation . Utilizing the equations and , one sees that and that corresponds to or , but the latter is not in the first quadrant.      Stream Functions  As we saw in the previous section, given a vector field defined over an open, connected, simply connected region is conservative if and only if it is irrotational. That is, being irrotational implies that , for some potential function . Is there a similar function for source-free vector fields? Suppose that, on some open region , we have a differentiable vector field and that there exists a twice continuously-differentiable scalar-valued function (called a stream function) such that . Then . Hence, if has a stream function , then its divergence at each point is zero. (Just as if a vector field has a potential function, its curl at each point is zero).    Source Free and Stream Functions  Let be an open, connected, simply connected region. Then is sourcefree on if and only if it has a stream function on .     Consider the function . Since and , we have that the vector field is source-free in . Hence, for all SCPS curves .  Moreover, if the curve is not closed (has starting point and ending point ), we have that      Summary  On an open, connected, simply connected region :    Irrotational Field  Source-Free Field    curl  Div    Have with  Have with    on all SCPS curves  on all SCPS curves         "
},
{
  "id": "sec-ch05-04-GreensTheoremDivergence-2",
  "level": "2",
  "url": "sec-ch05-04-GreensTheoremDivergence.html#sec-ch05-04-GreensTheoremDivergence-2",
  "type": "Note",
  "number": "5.4.1",
  "title": "",
  "body": " Suppose you have a SCPS curve representing a boundary enclosing a region inside some liquid whose particles motion is given by a vector field F. As before, it makes sense that the behaviour of the liquid particles in determines the behaviour of the particles near the boundary. For example, if for all (most) points in , particles near them are moving outwards (away from the point), it makes sense that the same is happening near the boundary (particles are moving outwards across the boundary ), as shown below:  "
},
{
  "id": "fig-ch05-04-outward-motion",
  "level": "2",
  "url": "sec-ch05-04-GreensTheoremDivergence.html#fig-ch05-04-outward-motion",
  "type": "Figure",
  "number": "5.4.1",
  "title": "",
  "body": " A simple closed smooth curve, traversed counter-clockwise, with vectors placed on it, pointing outwards perpendicular to its tangent vector. The curve is enclosing multiple points from which vectors points away from in all cardinal directions.    "
},
{
  "id": "sec-ch05-04-GreensTheoremDivergence-5",
  "level": "2",
  "url": "sec-ch05-04-GreensTheoremDivergence.html#sec-ch05-04-GreensTheoremDivergence-5",
  "type": "Definition",
  "number": "5.4.2",
  "title": "2D Divergence.",
  "body": " 2D Divergence   Let be a differentiable vector field representing the motion of particles. We measure the outwards\/repelling motion at a point ( ) by using .   "
},
{
  "id": "sec-ch05-04-GreensTheoremDivergence-6",
  "level": "2",
  "url": "sec-ch05-04-GreensTheoremDivergence.html#sec-ch05-04-GreensTheoremDivergence-6",
  "type": "Note",
  "number": "5.4.3",
  "title": "",
  "body": " When we say at a point , we really mean inside an infinitely small circle centered at .  "
},
{
  "id": "sec-ch05-04-GreensTheoremDivergence-7",
  "level": "2",
  "url": "sec-ch05-04-GreensTheoremDivergence.html#sec-ch05-04-GreensTheoremDivergence-7",
  "type": "Remark",
  "number": "5.4.4",
  "title": "The sign of <span class=\"process-math\">\\(\\operatorname{Div} \\vec{F}(a, b)\\)<\/span>.",
  "body": " The sign of  The sign of tells us whether particles are expanding or contracting at a point:     If is acting as a repellent (particles are moving away from ).    If is acting as an attractor (particles are moving towards ).    If , there is no discernible repellent\/attractor motion around and we say is not a source.     "
},
{
  "id": "example-ch05-04-ex-26-1",
  "level": "2",
  "url": "sec-ch05-04-GreensTheoremDivergence.html#example-ch05-04-ex-26-1",
  "type": "Example",
  "number": "5.4.5",
  "title": "",
  "body": "  Given the vector field :  (a) Compute Div F.  (b) Find a point that acts as an attractor and a point that acts as a repellent.  (c) Find a point that is not a source.         Attractor implies and repellent      Not a source implies zero Div.    "
},
{
  "id": "sec-ch05-04-GreensTheoremDivergence-10",
  "level": "2",
  "url": "sec-ch05-04-GreensTheoremDivergence.html#sec-ch05-04-GreensTheoremDivergence-10",
  "type": "Theorem",
  "number": "5.4.6",
  "title": "Green’s Theorem: Divergence.",
  "body": " Green's Theorem: Divergence   Let be a SCPS curve, oriented counterclockwise, that encloses a connected and simply connected region in the plane. Assume that , where and have continuous first partial derivatives in . Then    "
},
{
  "id": "sec-ch05-04-GreensTheoremDivergence-11",
  "level": "2",
  "url": "sec-ch05-04-GreensTheoremDivergence.html#sec-ch05-04-GreensTheoremDivergence-11",
  "type": "Remark",
  "number": "5.4.7",
  "title": "",
  "body": " Given and , the following are equivalent:   "
},
{
  "id": "sec-ch05-04-GreensTheoremDivergence-12",
  "level": "2",
  "url": "sec-ch05-04-GreensTheoremDivergence.html#sec-ch05-04-GreensTheoremDivergence-12",
  "type": "Note",
  "number": "5.4.8",
  "title": "",
  "body": "    Since we are dealing with curl, we assume that is simple and closed (so that it encloses a region ).    Important: This theorem says that in order to compute the divergence across a SCPS boundary, you add up the divergence at each point inside the enclosed region .    The proof of this result is simple and is given in the book.     "
},
{
  "id": "example-ch05-04-ex-26-2",
  "level": "2",
  "url": "sec-ch05-04-GreensTheoremDivergence.html#example-ch05-04-ex-26-2",
  "type": "Example",
  "number": "5.4.9",
  "title": "",
  "body": "  Using Green's theorem, compute the integral that represent the flux , where is the unit circle (oriented counter-clockwise).    From previous material . According to the above This implies that in this case the vector field is whose . Additionally, from the theorem . Notice that both region that of integration as well as the function behave well in polar coordinates. In this coordinate system the region is expressed as and , while . Hence    "
},
{
  "id": "example-ch05-04-ex-26-3",
  "level": "2",
  "url": "sec-ch05-04-GreensTheoremDivergence.html#example-ch05-04-ex-26-3",
  "type": "Example",
  "number": "5.4.10",
  "title": "",
  "body": "  Compute the flux of a fluid whose velocity field is given by , across the boundary of the region in the first quadrant bounded by the circles , the line , and the -axis (oriented counter-clockwise).   A region in the first quadrant bounded below by the x-axis and above by the line y equals x, lying between the circular arcs of radius 1 and radius 2.       Flux . Using the previous theorem, the integral can be expressed as . For the vector field one has and . The of this vector field equals . Now in order to use Polar Coordinates one must rewrite the and the equation . Utilizing the equations and , one sees that and that corresponds to or , but the latter is not in the first quadrant.    "
},
{
  "id": "sec-ch05-04-GreensTheoremDivergence-15",
  "level": "2",
  "url": "sec-ch05-04-GreensTheoremDivergence.html#sec-ch05-04-GreensTheoremDivergence-15",
  "type": "Note",
  "number": "5.4.11",
  "title": "Stream Functions.",
  "body": " Stream Functions  As we saw in the previous section, given a vector field defined over an open, connected, simply connected region is conservative if and only if it is irrotational. That is, being irrotational implies that , for some potential function . Is there a similar function for source-free vector fields? Suppose that, on some open region , we have a differentiable vector field and that there exists a twice continuously-differentiable scalar-valued function (called a stream function) such that . Then . Hence, if has a stream function , then its divergence at each point is zero. (Just as if a vector field has a potential function, its curl at each point is zero).  "
},
{
  "id": "sec-ch05-04-GreensTheoremDivergence-16",
  "level": "2",
  "url": "sec-ch05-04-GreensTheoremDivergence.html#sec-ch05-04-GreensTheoremDivergence-16",
  "type": "Remark",
  "number": "5.4.12",
  "title": "Source Free and Stream Functions.",
  "body": " Source Free and Stream Functions  Let be an open, connected, simply connected region. Then is sourcefree on if and only if it has a stream function on .  "
},
{
  "id": "example-ch05-04-ex-26-4",
  "level": "2",
  "url": "sec-ch05-04-GreensTheoremDivergence.html#example-ch05-04-ex-26-4",
  "type": "Example",
  "number": "5.4.13",
  "title": "",
  "body": "  Consider the function . Since and , we have that the vector field is source-free in . Hence, for all SCPS curves .  Moreover, if the curve is not closed (has starting point and ending point ), we have that    "
},
{
  "id": "sec-ch05-04-GreensTheoremDivergence-18",
  "level": "2",
  "url": "sec-ch05-04-GreensTheoremDivergence.html#sec-ch05-04-GreensTheoremDivergence-18",
  "type": "Remark",
  "number": "5.4.14",
  "title": "Summary.",
  "body": " Summary  On an open, connected, simply connected region :    Irrotational Field  Source-Free Field    curl  Div    Have with  Have with    on all SCPS curves  on all SCPS curves        "
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
