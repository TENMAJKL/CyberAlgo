export function even(number)
{
    var result = []

    for (var iterator = 1; iterator <= number; iterator++)
        if (iterator % 2 == 0)
            result.push(iterator)

    return result;
}
