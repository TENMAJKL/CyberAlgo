export function prime(number)
{
    if (number == 1)
        return false

    for (var iterator = 2; iterator < Math.sqrt(number); iterator++)
        if (number % iterator == 0)
            return false

    return true
}
