import org.junit.Assert
import kotlin.test.assertEquals
import kotlin.test.fail
import org.junit.Test as test

@test fun main(args: Array<String>) {


    var obj1= Class1()
    var obj2 = obj1.Array_Set()
    print(obj2)

   Assert.assertEquals("Set: [a, b, c]", obj2)
}

