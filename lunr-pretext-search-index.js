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
  "body": " Vectors in 3D   Everything we did with vectors in the previous section transfers to vectors in 3D (almost identically). Hence, we will focus first on getting used to three dimensions.    -Coordinate System   The 3-dimensional coordinate system represented by the , , and axes is called the -coordinate system.  Other names for this coordinate system are:     Euclidean space    3-dimensional space (3D space)     -space     .        You can draw a 2D representation of 3D space as follows:   This interactive is PENDING, it should correspond to Note 2.1.      For consistency, we will always draw the -space following the right-hand rule as shown below:   From OpenStax, Calculus Volume 3, Section 2.2    The xyz-coordinate system with axes arranged using the right-hand rule.   The -coordinate system with axes arranged using the right-hand rule.     The right-hand rule: a right hand, with the thumb pointing upwards, defining the z axis, while the rest of the fingers move from the x axis to the y axis.   The right-hand rule: a right hand, with the thumb pointing upwards, defining the axis, while the rest of the fingers move from the axis to the axis.        Points in -Space   In the -plane, we represent points by ordered pairs of the form . In -space, we represent points by ordered triples of the form .  Given a point , we call , , and the , , and coordinates of the point, respectively.     The point plotted in -space.      We have infinitely many planes. The main planes are:     The -plane: Consists of all points with -coordinate equal to zero. Defined by the equation . Contains the and axes.    The -plane: Consists of all points with -coordinate equal to zero. Defined by the equation . Contains the and axes.    The -plane: Consists of all points with -coordinate equal to zero. Defined by the equation . Contains the and axes.      From OpenStax, Calculus Volume 3, Section 2.2   The three coordinate planes xy, xz, and yz shown in xyz-space.   The three coordinate planes , , and shown in -space.          Sketch the plane parallel to the -plane through . Moreover, write an equation for this plane.    The -plane is defined by the equation , and any plane parallel to it consists of all points whose -coordinate is equal to one fixed constant. Since our plane must contain the point , that constant is 9, so the plane is defined by the equation   To sketch it, draw the -axes (following the right-hand rule), mark the value 9 on the -axis, and through that mark draw a copy of the -plane. The plane contains the point and, more generally, every point of the form .   This interactive is PENDING, it should correspond to Example 2.1.       Vectors in -Space   In the -plane, we represent vectors in standard position using the notation . In -space, we represent vectors in standard position using the notation .  If a vector is given by its starting point and ending point , we can shift it to standard position by using the formula .  A vector in standard position is also called a position vector.     The vector , drawn in standard position in -space.      Vector Operations in -Space  Vector operations in -space work exactly the same as in the -plane. We do operations coordinate-wise.  Let , , and be a real number (scalar). Then                .     Note: Geometrically, everything works the same. Adding\/subtracting vectors can be done using the Triangle Rule. Scaling a vector changes its length and potentially flips the direction of the vector. It is harder to draw now, though...     Given and , compute .    Working from the inside out, we first compute the vector coordinate-wise:   Its magnitude is   and hence .     Distance and Midpoint Formula   Given two points and in -space, we denote the line segment connecting and by . Moreover, we have that     The distance between the points and (the length of the line segment ) is given by     The midpoint on the line segment is given by      Note that the distance between and is simply .     From Briggs, et al., Calculus Early Transcendentals (3e), Figure 13.33   Two points P and Q in xyz-space connected by a line segment, illustrating the midpoint formula.   Two points and in -space connected by a line segment, illustrating the midpoint formula.      Magnitude  Given a 3D vector , then . As before, is a unit vector if .    Recall: Unit Vector in the Direction of  When working with a 3D vector , we can't define its direction by a single angle anymore (since is contained in infinitely many planes). Instead, we focus on the unit vector in the direction of .  Given a nonzero vector , the vector is a unit vector in the direction of .     Given , find:  (a) A unit vector in the direction of .  (b) All vectors of length 3 parallel to .    The magnitude of is , so a unit vector in the direction of is     A vector of length 3 parallel to points either in the direction of or in the direction opposite of , so the only two such vectors are      Coordinate Vectors   In -space, the following vectors are called coordinate vectors:      .     .     .     Given a vector , we can also write in the form .      Verify that .    Writing each scaled coordinate vector in component form and adding coordinate-wise:   as claimed.    "
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
  "body": " You can draw a 2D representation of 3D space as follows:   This interactive is PENDING, it should correspond to Note 2.1.    "
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
  "body": "  Sketch the plane parallel to the -plane through . Moreover, write an equation for this plane.    The -plane is defined by the equation , and any plane parallel to it consists of all points whose -coordinate is equal to one fixed constant. Since our plane must contain the point , that constant is 9, so the plane is defined by the equation   To sketch it, draw the -axes (following the right-hand rule), mark the value 9 on the -axis, and through that mark draw a copy of the -plane. The plane contains the point and, more generally, every point of the form .   This interactive is PENDING, it should correspond to Example 2.1.     "
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
  "body": " The Dot Product   Dot Product   Let and be two vectors in the -plane (or in -space; just add an extra entry). Then the dot product of and , denoted by , is given by: .  If and , the dot product can also be written as , where , and is the angle between and .        The dot product of two vectors is a scalar (number), not a vector.    Even though formulas 1 and 2 are equivalent, formula 1 is more useful for computation, formula 2 is more useful for applications.    Formula 2 also works in 3D space. Any two nonzero vectors, not on the same line, define a unique plane (later we will see how to write an equation for this plane). The formula uses the angle between the vectors in this unique plane.   Two non-parallel vectors and in -space and the plane they define.      Formula 2 is undefined if or equal .       Any time we say the angle between the vectors , unless otherwise stated, we mean the angle that is between 0 and    This interactive is PENDING, it should correspond to Note 3.1.       Compute the following:      , using formula 1 .     , using formula 2 (you may assume the angle between the vectors is ).       Formula 1 multiplies the corresponding components and adds the results:     The magnitudes are and , so formula 2 gives which agrees with the result of item 1: the two formulas are equivalent, and the dot product does not depend on the order of the vectors.      Find the angle between and . What happens if we use the dot product to find the angle between and ?    Since both vectors are nonzero, we can solve formula 2 for , computing the dot product with formula 1:   For and the dot product is , so   We get a right angle: even though points along the negative -axis, the angle between the two vectors that lies between 0 and is , so the vectors are perpendicular.     Orthogonality   Two vectors and in 2D or 3D are orthogonal if .     Orthogonal is another word for perpendicular (as defined in geometry). In 3D, the vectors are perpendicular in the plane they define.   The vectors and are orthogonal       Determine whether the vectors and are perpendicular using the dot product.    We compute the dot product using formula 1:   Since , the vectors are orthogonal, i.e. perpendicular.     Orthogonal Projections  The dot product allows us define projections. Think of projections as squishing (casting a shadow of) one vector into another.    Orthogonal Projections   Let and be two vectors (in 2D or 3D), with . The orthogonal projection (or simply projection ) of into is given by .     The orthogonal projection of onto for the two possible ranges of the angle between them.    . This interactive is PENDING, it should correspond to 2025_08_04_6f11792a371c74850db7g-5.     . This interactive is PENDING, it should correspond to 2025_08_04_6f11792a371c74850db7g-5-1.      You can minimize the side bar by clicking on the arrow icon. You can save a copy and create your own version of the graph by clicking on the \"Save\" button in the upper right corner of the graph. You can open in a new page from here: link to the left graph , link to the right graph         When we say that we are projecting into , we are actually projecting into the line containing .    As seen in the pictures, is a vector. Specifically, a scalar multiple of .    Important: As seen in the pictures, if the angle between and satisfies is in the direction of . If is in the direction opposite of .    What happens if the angle between and is or ?        Given and , compute . Are and proj parallel? Justify your answer.    We compute the two dot products in the projection formula:   Hence   Yes, they are parallel: is a scalar multiple of , so the two vectors lie on the same line. Since the scalar is negative, points in the direction opposite of .     Given any nonzero vector , we have that   We can use this fact to re-write the projection formula as follows: .    Scalar Component in the Direction of a Vector   Let and be two vectors with . The scalar component of in the direction of is given by   Moreover, we have that .     The importance of the quantity scal      is a shortcut to compute .    From Note 6, if , then , and hence is in the direction of .    If , then is in the direction opposite of .        Given , and , find and . Moreover, determine whether and are in the direction of or opposite to it.   This interactive is PENDING, it should correspond to Example 3.5.      First, . Then   Since , the projection is in the direction of ; since , the projection is in the direction opposite of , as the picture above shows. (Note that , which is why the two scalar components are negatives of each other.)     Summary  Given two vectors and with ; and the angle between and , then:     If or is in the direction of .    If or is in the direction opposite of .    If or .    A shortcut to find is to compute it as .      "
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
  "body": " Any time we say the angle between the vectors , unless otherwise stated, we mean the angle that is between 0 and    This interactive is PENDING, it should correspond to Note 3.1.    "
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
  "body": " The orthogonal projection of onto for the two possible ranges of the angle between them.    . This interactive is PENDING, it should correspond to 2025_08_04_6f11792a371c74850db7g-5.     . This interactive is PENDING, it should correspond to 2025_08_04_6f11792a371c74850db7g-5-1.     "
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
  "body": "  Given , and , find and . Moreover, determine whether and are in the direction of or opposite to it.   This interactive is PENDING, it should correspond to Example 3.5.      First, . Then   Since , the projection is in the direction of ; since , the projection is in the direction opposite of , as the picture above shows. (Note that , which is why the two scalar components are negatives of each other.)   "
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
  "body": " The Cross Product   The Cross Product Geometric Definition   Given two nonzero vectors and in -space, their cross product, denoted by , is a vector orthogonal to both and with length given by the formula , where is the angle between and .     From OpenStax, Calculus Volume 3, Section 2.4   Two vectors u and v in xyz-space with their cross product u times v shown as a vector orthogonal to both.   Two vectors and in -space with their cross product shown as a vector orthogonal to both.      Direction of  Given two nonzero vectors and not on the same line, to find the direction of :     Put and in standard position.    Let the fingers of your right hand curl from to along (along the angle that is between 0 and ).    The direction of your thumb as you curl in step 2 is the direction of .      We call this method to find the direction of the right-hand rule.   From OpenStax, Calculus Volume 3, Section 2.4   An illustration of the right-hand rule: fingers curl from u to v and the thumb points in the direction of u times v.   An illustration of the right-hand rule: fingers curl from to and the thumb points in the direction of .       Determine which of the following cross product vectors point in the positive -direction.   Four pairs of vectors and in the -plane, cases (a) to (d).     This interactive is PENDING, it should correspond to 2025_08_04_6cd67e91fafb048556b2g-3.     This interactive is PENDING, it should correspond to 2025_08_04_6cd67e91fafb048556b2g-3-2.       This interactive is PENDING, it should correspond to 2025_08_04_6cd67e91fafb048556b2g-3-3.     This interactive is PENDING, it should correspond to 2025_08_04_6cd67e91fafb048556b2g-3-1.       You can minimize the side bar by clicking on the arrow icon. You can save a copy and create your own version of the graph by clicking on the \"Save\" button in the upper right corner of the graph. You can open in a new page from here: link to the top left graph , link to the top right graph , link to the bottom left graph , link to the bottom right graph     In each of the figures (a) (d) above, both vectors lie in the -plane, so points either in the positive or in the negative -direction. By the right-hand rule, it points in the positive -direction exactly when curling from to along the angle between them ( ) is a counterclockwise rotation.  In (a) the counterclockwise rotation from to is , so this rotation is along the angle between the vectors, and points in the positive -direction. The same happens in (d), where the counterclockwise rotation is .  In (b) the counterclockwise rotation from to is , so the angle between the vectors is , and curling from to along this angle is a clockwise rotation: points in the negative -direction. The same happens in (c), where the angle between the vectors is , again traversed clockwise.  Hence only the cross products in (a) and (d) point in the positive -direction.        If (if or ), the direction of is undefined.    For nonzero and , the cross product is not commutative. In fact,  (they have the same length, but point in opposite directions).        Given the figure below, find:     The direction of .    The magnitude of .    The vector .      Vector , and vector , in -space.      From the figure, lies on the positive -axis and lies on the positive -axis. Curling the fingers of the right hand from the positive -axis towards the positive -axis, the thumb points in the positive -direction. Hence points in the positive -direction (the direction of ).    The angle between the positive -axis and the positive -axis is , so     Combining the two previous parts, is the vector of length 8 pointing in the positive -direction:      Cross Products Computational Definition   Given two vectors and (they could be the zero vector) in -space, .      Compute given that and . What is ?    Using the computational definition:   For the second question there is no need to compute another determinant: since ,      The Cross Product and Parallel Vectors  Given two vectors and , if and are parallel (lie on the same line).     Determine whether the vectors and lie on the same line.    We compute the cross product:   Since , the vectors are parallel, and hence they lie on the same line.     Another way to determine whether two vectors and are parallel is to check whether there exists a scalar such that .     Determine whether and are parallel.    Suppose there were a scalar such that . Comparing components:   The second component requires a different scalar than the other two, so no such exists and the vectors are not parallel. We can confirm this with the cross product:      The Cross Product and Parallelograms  Given two nonzero vectors and is the area of the parallelogram defined by and .    From OpenStax, Calculus Volume 3, Section 2.4   A parallelogram defined by vectors u and v, with the area equal to the magnitude of u cross product v.   A parallelogram defined by vectors and , with the area equal to the magnitude of .       Find the area of the triangle with vertices given by the points .    The triangle is half of the parallelogram defined by the vectors and , so its area is . In standard position:   Their cross product is   with magnitude   Hence the area of the triangle is .     Properties of the Cross Product  Given two vectors and in -space and real numbers, then                           "
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
  "body": "  Determine which of the following cross product vectors point in the positive -direction.   Four pairs of vectors and in the -plane, cases (a) to (d).     This interactive is PENDING, it should correspond to 2025_08_04_6cd67e91fafb048556b2g-3.     This interactive is PENDING, it should correspond to 2025_08_04_6cd67e91fafb048556b2g-3-2.       This interactive is PENDING, it should correspond to 2025_08_04_6cd67e91fafb048556b2g-3-3.     This interactive is PENDING, it should correspond to 2025_08_04_6cd67e91fafb048556b2g-3-1.       You can minimize the side bar by clicking on the arrow icon. You can save a copy and create your own version of the graph by clicking on the \"Save\" button in the upper right corner of the graph. You can open in a new page from here: link to the top left graph , link to the top right graph , link to the bottom left graph , link to the bottom right graph     In each of the figures (a) (d) above, both vectors lie in the -plane, so points either in the positive or in the negative -direction. By the right-hand rule, it points in the positive -direction exactly when curling from to along the angle between them ( ) is a counterclockwise rotation.  In (a) the counterclockwise rotation from to is , so this rotation is along the angle between the vectors, and points in the positive -direction. The same happens in (d), where the counterclockwise rotation is .  In (b) the counterclockwise rotation from to is , so the angle between the vectors is , and curling from to along this angle is a clockwise rotation: points in the negative -direction. The same happens in (c), where the angle between the vectors is , again traversed clockwise.  Hence only the cross products in (a) and (d) point in the positive -direction.   "
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
  "body": " Vector-Valued Functions   Think of a point tracing a path as it moves through -space (for example, think of tracing the path a mosquito travels as it flies through a room). We can think of the curve traced by this point in two ways:     The position of the point at a time , given by .    The position of the point at a time , given by the endpoint of the vector .        The position of a point on a curve in -space at three times , , , given by the position vectors , , .    . This interactive is PENDING, it should correspond to 2025_08_04_3d11211490a50caa278ag-1.     . This interactive is PENDING, it should correspond to 2025_08_04_3d11211490a50caa278ag-1-2.     . This interactive is PENDING, it should correspond to 2025_08_04_3d11211490a50caa278ag-1-1.      You can minimize the side bar by clicking on the arrow icon. You can save a copy and create your own version of the graph by clicking on the \"Save\" button in the upper right corner of the graph. You can open in a new page from here: link to the left graph , link to the middle graph , link to the right graph     Vector-Valued Function   A vector-valued function is a function which assigns to each input (the independent variable), an output of a vector. Mathematically, a vector-valued function can be written in the form where each component of is a function of (each component is a dependent variable).     The domain of is the intersection of the domains of , and .     The graph of , is shown below. If we don't restrict , what is the domain of ?   The helix traced by the vector , for from 0 to 10, in -space.      The domain of is the intersection of the domains of its three components. Each of , , and is defined for every real number , so that is, the domain is all real numbers (and the graph becomes a helix spiraling upwards forever in both directions).     If we write and don't specify an interval, assume that can take any possible value in the domain of .    The output vector of a vector-valued function doesn't have to be three dimensional. For example, the function traces the graph of on the interval .   This interactive is PENDING, it should correspond to 2025_08_04_3d11211490a50caa278ag-2-1.      Since vector-valued functions trace a curve as time passes by, we can talk about the orientation (or direction) in which the curve is traced.     For each of the following planar curves, write a vector-valued function which traces them with the specified orientation. Moreover, graph the given curves using arrows to indicate the orientation.     A circle of radius 1 (traced once) oriented counterclockwise, starting at .    The graph of , on the interval , traced from left to right (relative to the -axis).       The function traces the circle of radius 1 centered at the origin, since . It starts at , passes through at , through at , and through at  a counterclockwise motion and returns to at , tracing the circle exactly once. To graph it, draw the unit circle with the arrows on it pointing counterclockwise.   This interactive is PENDING, it should correspond to Example 5.2-1.      Letting , the point on the graph above is , so   Since increases as increases, the parabola is traced from left to right: starting at , down to the vertex , and up to . To graph it, draw this piece of the upward parabola with the arrows on it pointing from left to right.   This interactive is PENDING, it should correspond to Example 5.2-2.       Generally if you want to quickly parametrize a function on the interval from left to right, then you can use for .     For the following planar curve, write a vector-valued function which traces it with the specified orientation. Moreover, graph the given curve using arrows to indicate the orientation.  The graph of , on the interval , traced from right to left (relative to the -axis)    To trace the graph from right to left we need the -coordinate to decrease as increases and there multiple options to achieve this. Here are three:   Option A Let . Then and runs from 5 down to 1 as runs from 0 to 4. Hence   Indeed, and , so the curve starts at the right endpoint and ends at the left endpoint .   Option B Let . Then and runs from 5 down to 1 as runs from 1 to 5. Hence   Indeed, and , so the curve starts at the right endpoint and ends at the left endpoint .   Option C Let . Then and runs from 5 down to 1 as runs from to . Hence   Indeed, and , so the curve starts at the right endpoint and ends at the left endpoint .  To graph it, draw the piece of the upward parabola with vertex and -intercepts and , between and , with the arrows on it pointing from right to left.   This interactive is PENDING, it should correspond to Example 5.3.       Generally if you want to quickly parametrize a function on the interval from right to left, then you can use on of the following.      for .     for .     for .       Parametric Equations for a Line  The components , and of are also called parametric equations.    Line in Parametric Form   A line in -space (or in 2D space) can be defined as a vector-valued function by the equation where is any point on the line, and (the direction vector) gives you the change in each coordinate.  The equations , and are the parametric equations that define the line.     Geometrically, the definition above says that you take the line containing (represented by ), and shift it so it passes through the endpoint of .   A line in -space defined by the position vector and a direction vector , illustrating the parametric form: .       Find both the vector equation and the parametric equations of the line through in the direction of the vector . Does the point lie on this line?    Using as the point on the line and as the direction vector, the vector equation of the line is and the parametric equations are   For the point to lie on the line, all three parametric equations must be satisfied by the same value of . From the first equation:   Checking this value in the other two equations:   Both match, so yes: the point lies on the line (it is reached at ).     Given a line , since represents the direction of the line, we can compare lines by comparing their direction vectors.     Determine whether the following pair of lines are parallel, intersect at a single point, or are skew. If they are parallel, determine whether they are the same line. If they intersect at a single point, determine the point of intersection.     The direction vectors are for the first line and for the second. If the lines were parallel there would be a scalar with ; comparing components gives , , and respectively, which is impossible. Hence the lines are not parallel (and in particular they are not the same line).  It remains to determine whether the lines intersect at a single point or are skew. An intersection point may be reached by each line at a different time, so we rename the parameter of the second line and look for values and with . Comparing components gives the system   The second equation of the system gives . Substituting into the first equation:   Since we only used the first two equations, we must check these values in the third: and , so the third equation is also satisfied. Hence the system is consistent and the lines intersect at the single point that is, at the point . (Indeed, as well.)    "
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
  "body": " The position of a point on a curve in -space at three times , , , given by the position vectors , , .    . This interactive is PENDING, it should correspond to 2025_08_04_3d11211490a50caa278ag-1.     . This interactive is PENDING, it should correspond to 2025_08_04_3d11211490a50caa278ag-1-2.     . This interactive is PENDING, it should correspond to 2025_08_04_3d11211490a50caa278ag-1-1.     "
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
  "id": "sec-ch02-01-VectorValuedFunctions-8",
  "level": "2",
  "url": "sec-ch02-01-VectorValuedFunctions.html#sec-ch02-01-VectorValuedFunctions-8",
  "type": "Note",
  "number": "2.1.5",
  "title": "",
  "body": " If we write and don't specify an interval, assume that can take any possible value in the domain of .  "
},
{
  "id": "sec-ch02-01-VectorValuedFunctions-9",
  "level": "2",
  "url": "sec-ch02-01-VectorValuedFunctions.html#sec-ch02-01-VectorValuedFunctions-9",
  "type": "Remark",
  "number": "2.1.6",
  "title": "",
  "body": " The output vector of a vector-valued function doesn't have to be three dimensional. For example, the function traces the graph of on the interval .   This interactive is PENDING, it should correspond to 2025_08_04_3d11211490a50caa278ag-2-1.    "
},
{
  "id": "sec-ch02-01-VectorValuedFunctions-10",
  "level": "2",
  "url": "sec-ch02-01-VectorValuedFunctions.html#sec-ch02-01-VectorValuedFunctions-10",
  "type": "Note",
  "number": "2.1.7",
  "title": "",
  "body": " Since vector-valued functions trace a curve as time passes by, we can talk about the orientation (or direction) in which the curve is traced.  "
},
{
  "id": "example-ch02-01-ex-5-2",
  "level": "2",
  "url": "sec-ch02-01-VectorValuedFunctions.html#example-ch02-01-ex-5-2",
  "type": "Example",
  "number": "2.1.8",
  "title": "",
  "body": "  For each of the following planar curves, write a vector-valued function which traces them with the specified orientation. Moreover, graph the given curves using arrows to indicate the orientation.     A circle of radius 1 (traced once) oriented counterclockwise, starting at .    The graph of , on the interval , traced from left to right (relative to the -axis).       The function traces the circle of radius 1 centered at the origin, since . It starts at , passes through at , through at , and through at  a counterclockwise motion and returns to at , tracing the circle exactly once. To graph it, draw the unit circle with the arrows on it pointing counterclockwise.   This interactive is PENDING, it should correspond to Example 5.2-1.      Letting , the point on the graph above is , so   Since increases as increases, the parabola is traced from left to right: starting at , down to the vertex , and up to . To graph it, draw this piece of the upward parabola with the arrows on it pointing from left to right.   This interactive is PENDING, it should correspond to Example 5.2-2.     "
},
{
  "id": "sec-ch02-01-VectorValuedFunctions-12",
  "level": "2",
  "url": "sec-ch02-01-VectorValuedFunctions.html#sec-ch02-01-VectorValuedFunctions-12",
  "type": "Remark",
  "number": "2.1.9",
  "title": "",
  "body": " Generally if you want to quickly parametrize a function on the interval from left to right, then you can use for .  "
},
{
  "id": "example-ch02-01-ex-5-3",
  "level": "2",
  "url": "sec-ch02-01-VectorValuedFunctions.html#example-ch02-01-ex-5-3",
  "type": "Example",
  "number": "2.1.10",
  "title": "",
  "body": "  For the following planar curve, write a vector-valued function which traces it with the specified orientation. Moreover, graph the given curve using arrows to indicate the orientation.  The graph of , on the interval , traced from right to left (relative to the -axis)    To trace the graph from right to left we need the -coordinate to decrease as increases and there multiple options to achieve this. Here are three:   Option A Let . Then and runs from 5 down to 1 as runs from 0 to 4. Hence   Indeed, and , so the curve starts at the right endpoint and ends at the left endpoint .   Option B Let . Then and runs from 5 down to 1 as runs from 1 to 5. Hence   Indeed, and , so the curve starts at the right endpoint and ends at the left endpoint .   Option C Let . Then and runs from 5 down to 1 as runs from to . Hence   Indeed, and , so the curve starts at the right endpoint and ends at the left endpoint .  To graph it, draw the piece of the upward parabola with vertex and -intercepts and , between and , with the arrows on it pointing from right to left.   This interactive is PENDING, it should correspond to Example 5.3.     "
},
{
  "id": "sec-ch02-01-VectorValuedFunctions-14",
  "level": "2",
  "url": "sec-ch02-01-VectorValuedFunctions.html#sec-ch02-01-VectorValuedFunctions-14",
  "type": "Remark",
  "number": "2.1.11",
  "title": "",
  "body": " Generally if you want to quickly parametrize a function on the interval from right to left, then you can use on of the following.      for .     for .     for .     "
},
{
  "id": "sec-ch02-01-VectorValuedFunctions-15",
  "level": "2",
  "url": "sec-ch02-01-VectorValuedFunctions.html#sec-ch02-01-VectorValuedFunctions-15",
  "type": "Remark",
  "number": "2.1.12",
  "title": "Parametric Equations for a Line.",
  "body": " Parametric Equations for a Line  The components , and of are also called parametric equations.  "
},
{
  "id": "sec-ch02-01-VectorValuedFunctions-16",
  "level": "2",
  "url": "sec-ch02-01-VectorValuedFunctions.html#sec-ch02-01-VectorValuedFunctions-16",
  "type": "Definition",
  "number": "2.1.13",
  "title": "Line in Parametric Form.",
  "body": " Line in Parametric Form   A line in -space (or in 2D space) can be defined as a vector-valued function by the equation where is any point on the line, and (the direction vector) gives you the change in each coordinate.  The equations , and are the parametric equations that define the line.   "
},
{
  "id": "sec-ch02-01-VectorValuedFunctions-17",
  "level": "2",
  "url": "sec-ch02-01-VectorValuedFunctions.html#sec-ch02-01-VectorValuedFunctions-17",
  "type": "Note",
  "number": "2.1.14",
  "title": "",
  "body": " Geometrically, the definition above says that you take the line containing (represented by ), and shift it so it passes through the endpoint of .   A line in -space defined by the position vector and a direction vector , illustrating the parametric form: .    "
},
{
  "id": "example-ch02-01-ex-5-4",
  "level": "2",
  "url": "sec-ch02-01-VectorValuedFunctions.html#example-ch02-01-ex-5-4",
  "type": "Example",
  "number": "2.1.15",
  "title": "",
  "body": "  Find both the vector equation and the parametric equations of the line through in the direction of the vector . Does the point lie on this line?    Using as the point on the line and as the direction vector, the vector equation of the line is and the parametric equations are   For the point to lie on the line, all three parametric equations must be satisfied by the same value of . From the first equation:   Checking this value in the other two equations:   Both match, so yes: the point lies on the line (it is reached at ).   "
},
{
  "id": "sec-ch02-01-VectorValuedFunctions-19",
  "level": "2",
  "url": "sec-ch02-01-VectorValuedFunctions.html#sec-ch02-01-VectorValuedFunctions-19",
  "type": "Remark",
  "number": "2.1.16",
  "title": "",
  "body": " Given a line , since represents the direction of the line, we can compare lines by comparing their direction vectors.  "
},
{
  "id": "example-ch02-01-ex-5-5",
  "level": "2",
  "url": "sec-ch02-01-VectorValuedFunctions.html#example-ch02-01-ex-5-5",
  "type": "Example",
  "number": "2.1.17",
  "title": "",
  "body": "  Determine whether the following pair of lines are parallel, intersect at a single point, or are skew. If they are parallel, determine whether they are the same line. If they intersect at a single point, determine the point of intersection.     The direction vectors are for the first line and for the second. If the lines were parallel there would be a scalar with ; comparing components gives , , and respectively, which is impossible. Hence the lines are not parallel (and in particular they are not the same line).  It remains to determine whether the lines intersect at a single point or are skew. An intersection point may be reached by each line at a different time, so we rename the parameter of the second line and look for values and with . Comparing components gives the system   The second equation of the system gives . Substituting into the first equation:   Since we only used the first two equations, we must check these values in the third: and , so the third equation is also satisfied. Hence the system is consistent and the lines intersect at the single point that is, at the point . (Indeed, as well.)   "
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
