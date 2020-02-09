const exercises = [
    {
        name: "1-2-3-4", 
        sets: 4, 
        difficulty:1, 
        sequence: [[1,1], [1,2], [3,2], [3,4], [5,4], [5,6], [7,6], [7,8], [9,8], [9,9]],
        rest: 120
    }, 
    {
        name: "1-4-5", 
        sets: 4, 
        difficulty:5, 
        sequence: [[1,1], [1,4], [5,4]],
        description: "Start from the lowest rung.",
        rest: 120
    }, 
    {
        name: "Squaredance", 
        sets: 4, 
        difficulty:4, 
        sequence:[[1,1], [1,3], [3,3], [3,1], [1,1], [3,1], [3,3], [1,3], [1,1]],
        rest: 120
    },
    {
        name: "Double Dynos", 
        sets: 4, difficulty:5, 
        sequence: [[1,1], [2,2], [3,3], [4,4], [5,5], [6,6], [7,7], [8,8], [9,9]],
        rest: 120
    },
    {
        name: "1-4-6",
        sets: 4,
        difficulty: 6,
        sequence: [[1,1], [1,4], [6,4], [6,8], [8,8]],
        rest: 120
    },
    {
        name: "Max-Reach",
        sets: 4,
        difficulty: 3,
        sequence: [[1,1], [1,2], [1,3], [1,4], [1,5], [1,6]],
        description: "Start from the lowest rung. Move from one rung to the next with one hand, as far as possible.",
        rest: 120
    },
    {
        name: "The Ladder",
        sets: 4,
        difficulty: 3,
        sequence: [[1,1], [1,2], [1,3], [1,4], [1,5], [1,6], [1,5], [1,4], [1,3], [1,2], [1,1]],
        description: "Start from the lowest rung. Move from one rung to the next with one hand, as far as possible. Then, campus down in the same sequence until you are in your starting position.",
        rest: 120
    },
    {
        name: "+2-1",
        sets: 4,
        difficulty: 4,
        sequence: [[1,1], [1,3], [1,2], [3,2], [2,2], [2,4], [2,3], [4,3], [3,3], [3,5], [3,4], [5,4], [4,4], [4,6], [4,5], [6,5], [5,5], [5,7], [5,6], [7,6], [6,6], [6,8], [6,7], [8,7], [7,7], [7,9], [7,8], [9,8], [8,8]],
        rest: 120
    }
  ]

export default exercises