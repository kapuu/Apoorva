import java.time.LocalDate
import java.time.format.DateTimeFormatter
import java.util.*

class Class1 {

    fun Array_Set(): String {

            val array = arrayOf("a", "b", "c")
            val set = HashSet(Arrays.asList(*array))

            return ("Set: $set")
    }
}





