import re


def to_camel_case(text):
    split_string = re.split('-|_', text)
    if split_string[0].isupper():
        return "".join([x.capitalize() for x in split_string])
    else:
        first_word = split_string.pop(0)
        return first_word + "".join([x.capitalize() for x in split_string])


# print(to_camel_case('the-stealth-warrior'))
# print(to_camel_case('The_stealth_warrior'))
